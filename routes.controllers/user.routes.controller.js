const { request, response } = require('express')

//Parámetros de segmento y query params:
/*  Parámetros de segmento /:Id   Se recupera mediante req.params.Id*/
/* Para esto hay que prepararlo en el router indicándole que detras de la ruta va a venir un parámetro "/:Id" */

const usersGet_controller = (req = request, res = response) => {
    const queryParams = req.query
    res.json({
        msg: 'get - api',
        queryParams,
    })
}
const usersPost_controller = (req = request, res = response) => {
    const { nombre, edad } = req.body
    res.json({
        msg: 'post - api',
        nombre,
        edad,
    })
}

const usersPut_controller = (req = request, res = response) => {
    const id = req.params.id
    res.json({
        msg: 'put - api',
        id,
    })
}

const usersPatch_controller = (req = request, res = response) => {
    res.json({
        msg: 'put - api',
    })
}

const usersDelete_controller = (req = request, res = response) => {
    res.json({
        msg: 'delete - api',
    })
}

module.exports = {
    usersGet_controller,
    usersPost_controller,
    usersPut_controller,
    usersPatch_controller,
    usersDelete_controller,
}
