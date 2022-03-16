const editorElement = document.getElementById('editor')
const resultElement = document.getElementById('result')

const clearElement = document.getElementById('clear')

editorElement.addEventListener('changed', (event) => {
    clearElement.disabled = event.detail.isEmpty
})

function cleanLatex(latexExport) {
    if (latexExport.includes('\\\\')) {
        const steps = '\\begin{align*}' + latexExport + '\\end{align*}'
        return steps
            .replace('\\begin{aligned}', '')
            .replace('\\end{aligned}', '')
            .replace(new RegExp('(align.{1})', 'g'), 'aligned')
    }
    return latexExport.replace(new RegExp('(align.{1})', 'g'), 'aligned')
}

editorElement.addEventListener('exported', (evt) => {
    const exports = evt.detail.exports
    if (exports && exports['application/x-latex']) {
        katex.render(cleanLatex(exports['application/x-latex']), resultElement)
    } else if (exports && exports['application/mathml+xml']) {
        resultElement.innerText = exports['application/mathml+xml']
    } else if (exports && exports['application/mathofficeXML']) {
        resultElement.innerText = exports['application/mathofficeXML']
    } else {
        resultElement.innerHTML = ''
    }
})

clearElement.addEventListener('click', () => {
    editorElement.editor.clear()
})

iink.register(editorElement, {
    recognitionParams: {
        type: 'MATH',
        protocol: 'WEBSOCKET',
        server: {
            scheme: 'https',
            host: 'webdemoapi.myscript.com',
            applicationKey: '268994fa-9fa0-4572-90c1-d2b9cbfa8f4c',
            hmacKey: 'c2ba20f5-73e6-4fc0-ae4b-2986062eae04',
        },
        iink: {
            math: {
                mimeTypes: ['application/x-latex', 'application/vnd.myscript.jiix'],
            },
            export: {
                jiix: {
                    strokes: true,
                },
            },
        },
    },
})

window.addEventListener('resize', () => {
    editorElement.editor.resize()
})
