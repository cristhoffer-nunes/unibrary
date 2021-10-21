const { Router } = require('express')
const ReservaController = require('../controllers/ReservaController')
const router = Router()
router
  .get('/v1/api/reserva', ReservaController.listaTodaReserva)

module.exports = router
