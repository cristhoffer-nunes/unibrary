const express = require('express')
const acervo = require('./acervoRoute')
const cliente = require('./clienteRoute')
const login = require('./loginRoute')

module.exports = app => {
  app.use(express.json())
  app.use(acervo)
  app.use(cliente)
  app.use(login)
}
