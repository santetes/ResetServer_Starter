// Elementos HTML
const $btn_incluir = document.getElementById('incluir')
const $resultado = document.getElementsByClassName('base')
const $listado = document.getElementById('listado')
const $limpiar = document.getElementById('clear')

$btn_incluir.addEventListener('click', () => {
    const resultado_txt = $resultado[0].innerText
    const elemento_listado = document.createElement('li')
    elemento_listado.classList.add('list-group-item')
    elemento_listado.textContent = resultado_txt
    $listado.appendChild(elemento_listado)
    $limpiar.click()
})
