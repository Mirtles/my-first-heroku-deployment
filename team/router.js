const Router = require('express')
const Team = require('./model')

const router = new Router()

router.get(
  '/team',
  (req, res, next) => {
    Team.findAll()
      .then(teams => {
        console.log(teams.map(team => team.name))
        res.send(`All teams: ${teams.map(team => team.name)}`)
      })
      .catch(error => next(error)
      )
  }
)

router.get(
  '/team/:id',
  (req, res, next) => {
    // find by primary key
    Team.findByPk(req.params.id)
      .then(team => {
        console.log("Team name:", team.name)
        res.send(team)
      })
      .catch(error => next(error))
  }
)

router.post(
  '/team',
  (req, res, next) => {
    Team.create(req.body)
      .then(team => res.send(team))
      .catch(error => next(error))
  })

router.put(
  '/team/:id',
  (req, res, next) => {
    Team.findByPk(req.params.id)
      .then(team => {
        if (team) {
          return team.update(req.body)
            .then(team => res.json(team))
        }
        return res.status(404).end()
      })
      .catch(error => next(error))
  }
)

module.exports = router