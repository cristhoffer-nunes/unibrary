const database = require('../models')
const bcrypt = require('bcrypt')

class ClienteController {
  static async listaTodoCliente (req, res) {
    try {
      const todoCliente = await database.Clientes.findAll()
      return res.status(200).json(todoCliente)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmCliente (req, res) {
    const { numeroMatricula } = req.params
    try {
      const pegaCliente = await database.Clientes.findOne({ where: { numero_matricula: numeroMatricula } })
      return res.status(200).json(pegaCliente)
    } catch (error) {
      return res.status(400).json(error.message)
    }
  }

  static async criaCliente (req, res) {
    const dados = req.body
    try {
      const senhaCript = bcrypt.hash(dados.senha, 12)

      dados.senha = await senhaCript
      const dadosCriado = await database.Clientes.create({
        nome: dados.nome,
        email: dados.email,
        senha: dados.senha,
        numero_matricula: dados.numero_matricula,
        ativo: dados.ativo,
        rg: dados.rg,
        cpf: dados.cpf,
        universidade: dados.universidade,
        unidade: dados.unidade,
        curso: dados.curso,
        endereco: dados.endereco,
        data_nascimento: dados.data_nascimento

      })
      return res.status(201).json(dadosCriado)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  static async apagaCliente (req, res) {
    const { id } = req.params
    try {
      const apagaCliente = await database.Clientes.destroy({ where: { id: Number(id) } })
      return res.status(200).json(apagaCliente)
    } catch (error) {
      return res.status(400).json(error.message)
    }
  }
}

module.exports = ClienteController
