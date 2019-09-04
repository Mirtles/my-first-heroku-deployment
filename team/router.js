const Router = require('express')
const Team = require('./model')

const router = new Router()

router.get(
  '/team',
  (req, res, next) => {
    Team.findAll()
      .then(teams => {
        console.log(teams.map(team => team.name))
        res.send(`All teams: ${teams.map(team=>team.name)}`)
      })
      .catch(error => next(error)
      )
  }
)

router.post(
  '/team',
  (req, res, next) => {
    Team.create(req.body)
      .then(team => res.send(team))
      .catch(error => next(error))
  })

module.exports = router
