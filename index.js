const express = require('express')
const bodyParser = require('body-parser')
const teamRouter = require('./team/router')
const playerRouter = require('./player/router')

const app = express()
const jsonParser = bodyParser.json()
const port = process.env.PORT || 4000

app.use(jsonParser)
app.use(teamRouter)
app.use(playerRouter)
app.listen(port, () => { console.log(`The football server is listening on port ${port}`) })