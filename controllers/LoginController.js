const jwt = require('jsonwebtoken')

class LoginController {
  static fazerLogin (req, res) {
    const token = criaTokenJWT(req.user)
    res.set('Authorization', token)
    res.status(204).send()
  }
}

function criaTokenJWT (usuario) {
  const payload = {
    numero_matricula: usuario.numero_matricula
  }

  const token = jwt.sign(payload, process.env.CHAVE_JWT)
  return token
}

module.exports = LoginController
