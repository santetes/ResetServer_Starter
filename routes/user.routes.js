const { Router } = require('express')
const {
    usersGet_controller,
    usersPost_controller,
    usersPut_controller,
    usersDelete_controller,
    usersPatch_controller,
} = require('../routes.controllers/user.routes.controller')

const router = Router()

router.get('/', usersGet_controller)

router.post('/', usersPost_controller)

router.put('/:id', usersPut_controller)

router.patch('/', usersPatch_controller)

router.delete('/', usersDelete_controller)

module.exports = router
