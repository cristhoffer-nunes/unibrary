const { Router } = require('express')
const AcervoController = require('../controllers/AcervoController')
const router = Router()

router.get('/v1/api/acervo', AcervoController.listaTodoAcervo)
router.get('/v1/api/acervo/:id', AcervoController.pegaUmaObra)

module.exports = router
