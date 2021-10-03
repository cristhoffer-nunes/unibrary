const passport = require('passport')

module.exports = {
  local: (req, res, next) => {
    passport.authenticate(
      'local',
      {
        session: false
      },
      (erro, usuario, info) => {
        if (erro && erro.name === 'InvalidArgumentError') {
          return res.status(401).json({ erro: erro.message })
        }

        if (erro) {
          return res.status(500).json({ erro: erro.message })
        }

        if (!usuario) {
          return res.status(401).json()
        }

        req.user = usuario
        return next()
      }
    )(req, res, next)
  },

  bear: function (req, res, next) {
    passport.authenticate('bearer', function (err, user, info) {
      if (err && err.name === 'JsonWebTokenError') return res.status(401).json({ err: err.message })
      if (err && err.name === 'TokenExpiredError') return res.status(401).json({ erro: err.message, expiradoEm: err.expiredAt })
      if (err) return res.status(500).json({ err: err.message })
      req.token = info.token
      req.user = user
      return next()
    })(req, res, next)
  },

  bearer: (req, res, next) => {
    passport.authenticate(
      'bearer',
      { session: false },
      (erro, usuario, info) => {
        if (erro && erro.name === 'JsonWebTokenError') {
          return res.status(401).json({ erro: erro.message })
        }

        if (erro && erro.name === 'TokenExpiredError') {
          return res
            .status(401)
            .json({ erro: erro.message, expiradoEm: erro.expiredAt })
        }

        if (erro) {
          return res.status(500).json({ erro: erro.message })
        }

        if (!usuario) {
          return res.status(401).json()
        }

        req.token = info.token
        req.user = usuario
        return next()
      }
    )(req, res, next)
  }
}
