const express = require('express')
const app = express()
const routes = require('./routes')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger/swagger_output.json')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

routes(app)

app.listen(3000, () => console.log(`Servidor está rodando na porta ${3000}`))

module.exports = app
