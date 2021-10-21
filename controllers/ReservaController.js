const database = require('../models')

class ReservaController {
  static async listaTodaReserva (req, res) {
    try {
      const todaReserva = await database.Reserva.findall()
      return res.status(200).json(todaReserva)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}

module.exports = ReservaController
