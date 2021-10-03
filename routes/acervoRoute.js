const { Router } = require('express')
const AcervoController = require('../controllers/AcervoController')
const passport = require('passport')
const router = Router()

router.get(
  /*
    #swagger.description = 'Rota para listar todas as obras do acervo.'
    */

  '/v1/api/acervo', AcervoController.listaTodoAcervo)
router.get(
  /*
    #swagger.description = 'Rota para listar uma obra por id.'
    */
  '/v1/api/acervo/:id', passport.authenticate('bearer', { session: false }), AcervoController.pegaUmaObra)

module.exports = router
