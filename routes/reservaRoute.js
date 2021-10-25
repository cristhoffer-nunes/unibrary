const { Router } = require('express')
const ReservaController = require('../controllers/ReservaController')
const router = Router()

router
  .get('/v1/api/reserva', ReservaController.listaTodaReserva)
  .get('/v1/api/reserva/cliente', ReservaController.listaReservaCliente)
  .post('/v1/api/reserva', ReservaController.fazReserva)
  .delete('/v1/api/reserva/:id', ReservaController.apagaReserva)

module.exports = router
