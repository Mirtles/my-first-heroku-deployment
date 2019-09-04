const Router = require('express')
const Team = require('./model')

const router = new Router()

router.get(
  '/team',
  (req, res, next) => {
    Team.findAll()
      .then(teams => {
        res.send(`All teams: ${teams}`)
      })
      .catch(error => next(error)
      )
  }
)

module.exports = router
