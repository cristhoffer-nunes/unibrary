require('dotenv').config()

const express = require('express')
const app = express()
const session = require('express-session')
const passport = require('passport')
const routes = require('./routes')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger/swagger_output.json')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(session({ secret: 'MySecretK3y', saveUninitialized: true, resave: true, cookie: { maxAge: 3600000 } }))
app.use(passport.initialize())
app.use(passport.session())

require('./passport/config')

routes(app)

app.listen(8080, () => console.log(`Servidor está rodando na porta ${8080}`))

module.exports = app
