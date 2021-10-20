require('dotenv').config()

const express = require('express')
const app = express()
const routes = require('./routes')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger/swagger_output.json')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

routes(app)

app.listen(8080, () => console.log(`Servidor está rodando na porta ${8080}`))

module.exports = app
