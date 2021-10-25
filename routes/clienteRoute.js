const { Router } = require('express')
const ClienteController = require('../controllers/ClienteController')
const router = Router()
router
  .get('/v1/api/cliente', ClienteController.listaTodoCliente)
  .get('/v1/api/cliente/:numeroMatricula', ClienteController.pegaUmCliente)
  .post('/v1/api/cliente', ClienteController.criaCliente)
  .delete('/v1/api/cliente/:id', ClienteController.apagaCliente)

module.exports = router
