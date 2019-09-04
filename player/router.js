const Router = require('express')
const Player = require('./model')
const Team = require('..//team/model')

const router = new Router()

router.get(
  '/player',
  (req, res, next) => {
    Player.findAll()
      .then(players => {
        console.log(players.map(player => player.name))
        res.send(`All players: ${players.map(player => player.name)}`)
      })
      .catch(error => next(error)
      )
  }
)

router.get(
  '/player/:id',
  (req, res, next) => {
    Player.findByPk(req.params.id, { include: [Team] })
      .then(player => {
        console.log("Player name:", player.name)
        res.send(player)
      })
      .catch(error => next(error))
  }
)

router.post(
  '/player',
  (req, res, next) => {
    Player.create(req.body)
      .then(player => res.send(player))
      .catch(error => next(error))
  })

router.put(
  '/player/:id',
  (req, res, next) => {
    Player.findByPk(req.params.id)
      .then(player => {
        if (player) {
          return player.update(req.body)
            .then(player => res.json(player))
        }
        return res.status(404).end()
      })
      .catch(error => next(error))
  }
)

module.exports = router
