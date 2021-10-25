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
    const numeroMatricula = req.body.numeroMatricula
    try {
      const pegaCliente = await database.Clientes.findOne({ where: { numero_matricula: numeroMatricula } })
      const pegaReservaCliente = await database.Reserva.findAll({ where: { cliente_id: Number(pegaCliente.id) } })
      return res.status(200).json(pegaReservaCliente)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  static async fazReserva (req, res) {
    const numeroMatricula = req.body.numeroMatricula
    const obraId = req.body.obra
    try {
      const pegaCliente = await database.Clientes.findOne({ where: { numero_matricula: numeroMatricula } })
      const pegaObra = await database.Acervo.findOne({ where: { id: Number(obraId) } })
      const { count } = await database.Reserva.findAndCountAll({ where: { cliente_id: pegaCliente.id } })

      if (count >= 2) {
        throw new Error('Número máximo de reservas atingido.')
      } else {
        const novaReserva = await database.Reserva.create({
          data_reserva: new Date(),
          acervo_id: pegaObra.id,
          cliente_id: pegaCliente.id
        })
        await database.Acervo.update({ qtd_obras: pegaObra.qtd_obras - 1 }, { where: { id: pegaObra.id } })
        return res.status(201).json(novaReserva)
      }
    } catch (error) {
      return res.status(400).json({ error: 'Número máximo de reservas atingido.' })
    }
  }

  static async apagaReserva (req, res) {
    const { id } = req.params
    try {
      const apagaReserva = await database.Reserva.destroy({ where: { id: Number(id) } })
      return res.status(200).json(apagaReserva)
    } catch (error) {
      return res.status(400).json(error.message)
    }
  }
}

module.exports = ReservaController
