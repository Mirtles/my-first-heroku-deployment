// a function that creates an express server
const express = require('express')
// destructures Router method from express
const { Router } = express
const router = new Router()

router.get('/', (req, res) => res.send("It's working! IT'S WORKIIIING!"))

const app = express()
app.use(router)

const port = 4000
app.listen(port)

