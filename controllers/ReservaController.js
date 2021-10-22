const database = require('../models')

class ReservaController {
  static async listaTodaReserva (req, res) {
    try {
      const todaReserva = await database.Reserva.findAll()
      return res.status(200).json(todaReserva)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  static async listaReservaCliente (req, res) {
    try {
      const numeroMatricula = req.body.numeroMatricula
      const pegaCliente = await database.Clientes.findOne({ where: { numero_matricula: numeroMatricula } })
      const pegaReservaCliente = await database.Reserva.findAll({ where: { cliente_id: Number(pegaCliente.id) } })
      return res.status(200).json(pegaReservaCliente)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  static async fazUmaReserva (req, res) {
    const numeroMatricula = req.body.numeroMatricula
    const obraId = req.body.obra
    try {
      const pegaCliente = await database.Clientes.findOne({ where: { numero_matricula: numeroMatricula } })
      const pegaObra = await database.Acervo.findOne({ where: { id: Number(obraId) } })
      const novaReserva = await database.Reserva.create({
        data_reserva: new Date(),
        acervo_id: pegaObra.id,
        cliente_id: pegaCliente.id
      })

      return res.status(201).json(novaReserva)
    } catch (error) {

    }
  }
}

module.exports = ReservaController
