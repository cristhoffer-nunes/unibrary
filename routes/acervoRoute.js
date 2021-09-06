const { Router } = require('express')
const AcervoControlelr = require('../controllers/AcervoController')
const router = Router()

router.get(
  /*
    #swagger.description = 'Rota para listar todas as obras do acervo.'
    */

  '/acervo', AcervoControlelr.listaTodoAcervo)

module.exports = router
