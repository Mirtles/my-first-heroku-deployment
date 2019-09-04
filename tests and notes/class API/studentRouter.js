const { Router } = require('express')

const students = ["Mirte", "Patty", "Sowjanya", "Rick"]

const router = new Router()

router.get('/student', (req, res) => res.send(students))

module.exports = router