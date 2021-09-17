const database = require('../models')

class AcervoController {
  static async listaTodoAcervo (req, res) {
    try {
      const todoAcervo = await database.Acervo.findAll()
      return res.status(200).json(todoAcervo)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaObra (req, res) {
    const { id } = req.params
    try {
      const pegaObra = await database.Acervo.findOne({ where: { id: Number(id) } })
      return res.status(200).json(pegaObra)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = AcervoController
