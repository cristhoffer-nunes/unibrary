const { Router } = require('express')
const router = Router()
const passport = require('../middlewares/passport')
const LoginController = require('../controllers/LoginController')

router
  .post('/v1/api/auth', passport.local, LoginController.fazerLogin)

module.exports = router
