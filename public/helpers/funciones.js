const gestionSeleccionFila = ($fila, $td, $btn_borrar) => {
    $fila.forEach((element) => {
        element.addEventListener('click', (e) => {
            $btn_borrar.classList.add('d-none')
            $td.forEach((td) => {
                td.classList.remove('table-primary')
                td.classList.remove('table-danger')
            })
            const filaCompleta = e.target.parentNode
            const hijos = filaCompleta.querySelectorAll('td')
            hijos.forEach((hijo) => {
                hijo.classList.add('table-primary')
            })
        })
    })
}

const gestionBorradoCelda = ($td_collection, $btn_borrar) => {
    $td_collection.forEach((element) => {
        element.addEventListener('click', (evento) => {
            $td_collection.forEach((element) => {
                element.classList.remove('table-danger')
            })
            evento.target.classList.add('table-danger')
            $btn_borrar.classList.remove('d-none')
        })
    })

    $btn_borrar.addEventListener('click', (e) => {
        const celdaActiva = document.querySelector('.table-danger')
        celdaActiva.innerText = ''
    })
}

export { gestionSeleccionFila, gestionBorradoCelda }
