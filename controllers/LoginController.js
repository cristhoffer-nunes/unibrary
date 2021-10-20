const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { InvalidArgumentError } = require('../error/erro')
const database = require('../models')

class LoginController {
  static async login (req, res) {
    try {
      const numeroMatricula = req.body.numeroMatricula
      const senha = req.body.senha
      const usuario = await database.Clientes.findOne({ where: { numero_matricula: numeroMatricula } })

      if (verificaUsuario(usuario) !== false && verificaAtivo(usuario.ativo) !== false && await verificaSenha(senha, usuario.senha) !== false) {
        const token = criaTokenJWT(usuario)
        return res.status(200).json({ result: token })
      } else {
        throw new Error()
      }
    } catch (error) {
      return res.status(400).json({ error: 'Bad Request' })
    }
  }
}

function criaTokenJWT (usuario) {
  const payload = {
    numero_matricula: usuario.numero_matricula
  }

  const token = jwt.sign(payload, process.env.CHAVE_JWT, { expiresIn: '15m' })
  return token
}

function verificaUsuario (usuario) {
  if (!usuario == null) {
    return true
  } else if (usuario == null) {
    return false
  }
}

async function verificaSenha (senha, senhaHash) {
  const senhaValida = await bcrypt.compare(senha, senhaHash)
  return senhaValida
}

function verificaAtivo (usuarioAtivo) {
  if (usuarioAtivo === false) {
    throw new InvalidArgumentError('Usuário invativo!')
  }
}

module.exports = LoginController
