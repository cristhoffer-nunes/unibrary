const express = require('express')
const acervo = require('./acervoRoute')
const cliente = require('./clienteRoute')
const login = require('./loginRoute')
const reserva = require('./reservaRoute')

module.exports = app => {
  app.use(express.json())
  app.use(acervo)
  app.use(cliente)
  app.use(login)
  app.use(reserva)
}
