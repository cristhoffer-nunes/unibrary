const { Router } = require('express')
const AcervoControlelr = require('../controllers/AcervoController')
const router = Router()

router.get(
  /*
    #swagger.description = 'Rota para listar todas as obras do acervo.'
    */

  '/acervo', AcervoControlelr.listaTodoAcervo)
router.get(
  /*
    #swagger.description = 'Rota para listar uma obra por id.'
    */
  '/acervo/:id', AcervoControlelr.pegaUmaObra)

module.exports = router
