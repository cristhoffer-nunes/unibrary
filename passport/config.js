const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const BearerStrategy = require('passport-http-bearer').Strategy
const database = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { InvalidArgumentError } = require('../error/erro')

function verificaUsuario (usuario) {
  if (usuario == null) {
    throw new InvalidArgumentError('Usuário inexistente!')
  }
}

function verificaAtivo (usuarioAtivo) {
  if (usuarioAtivo === false) {
    throw new InvalidArgumentError('Usuário invativo!')
  }
}

async function verificaSenha (senha, senhaHash) {
  const senhaValida = await bcrypt.compare(senha, senhaHash)
  if (senhaValida === false) {
    throw new InvalidArgumentError('Senha inválida!')
  }
}

passport.use(
  new LocalStrategy(
    {
      usernameField: 'numeroMatricula',
      passwordField: 'senha'
    },
    async (numeroMatricula, senha, done) => {
      try {
        const usuario = await database.Clientes.findOne({ where: { numero_matricula: numeroMatricula } })
        verificaUsuario(usuario)
        verificaAtivo(usuario.ativo)
        await verificaSenha(senha, usuario.senha)
        done(null, usuario)
      } catch (error) {
        done(error)
      }
    }

  )
)

passport.use(
  new BearerStrategy(
    async (token, done) => {
      try {
        const payload = jwt.verify(token, process.env.CHAVE_JWT)
        const usuario = await database.Clientes.findOne({ where: { numero_matricula: payload.numero_matricula } })
        done(null, usuario)
      } catch (error) {
        done(error)
      }
    }

  )
)

passport.serializeUser(function (usuario, done) {
  done(null, usuario.numero_matricula)
})

passport.deserializeUser(function (numeroMatricula, done) {
  done(null, numeroMatricula)
})
