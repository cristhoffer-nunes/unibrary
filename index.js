require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const routes = require('./routes')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger/swagger_output.json')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  app.use(cors())
  next()
})
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

routes(app)

app.listen(port, () => console.log('Server is running'))

module.exports = app
