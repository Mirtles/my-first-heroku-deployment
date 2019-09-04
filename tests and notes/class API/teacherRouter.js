const { Router } = require('express')

const teachers = ["Arien"]

const router = new Router()

router.use('/teacher', (req, res) => res.send(teachers))

module.exports = router