const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger/swagger_output.json')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(cors())

routes(app)

app.listen(8080, () => console.log(`Servidor está rodando na porta ${3000}`))

module.exports = app
