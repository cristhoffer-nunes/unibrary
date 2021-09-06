const express = require('express')
const acervo = require('./acervoRoute')

module.exports = app => {
  app.use(express.json())
  app.use(acervo)
}
