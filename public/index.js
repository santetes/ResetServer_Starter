import { gestionBorradoCelda, gestionSeleccionFila } from './helpers/funciones.js'

// Elementos HTML
const $btn_incluir = document.getElementById('incluir')
const $resultado = document.getElementsByClassName('base')
const $limpiar = document.getElementById('clear')
const $td_collection = document.querySelectorAll('td')
const $fila_collection = document.querySelectorAll('.fila')
const $btn_borrar = document.getElementById('btn-borrar')

$btn_incluir.addEventListener('click', (event) => {
    event.preventDefault()
    const textoEntrada = $resultado[0].innerText
    $resultado.value = ''
    const td_seleccionados = document.querySelectorAll('.table-primary')

    try {
        td_seleccionados.forEach((td) => {
            if (td.textContent == '') {
                td.textContent = textoEntrada
                throw 'Encontrado hueco'
            }
        })
    } catch (error) {
        console.log(error)
    }

    $limpiar.click()
})

gestionSeleccionFila($fila_collection, $td_collection, $btn_borrar)

gestionBorradoCelda($td_collection, $btn_borrar)
