const { Router } = require('express')
const router = Router()
const LoginController = require('../controllers/LoginController')

router
  .post('/v1/api/auth', LoginController.login)

module.exports = router
