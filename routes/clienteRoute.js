const { Router } = require('express')
const ClienteController = require('../controllers/ClienteController')
const passport = require('passport')
const router = Router()
router
  .get('/v1/api/cliente', passport.authenticate('bearer', { session: false }), ClienteController.listaTodoCliente)
  .get('/v1/api/cliente/:numeroMatricula', passport.authenticate('bearer', { session: false }), ClienteController.pegaUmCliente)
  .post('/v1/api/cliente', passport.authenticate('bearer', { session: false }), ClienteController.criaCliente)

module.exports = router
