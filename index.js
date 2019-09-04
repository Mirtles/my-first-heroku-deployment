const express = require('express')
const bodyParser = require('body-parser')
const Team = require("./team/model")
const teamRouter = require('./team/router')

const app = express()
const jsonParser = bodyParser.json()
const port = process.env.PORT || 4000

app.use(jsonParser)
app.use(teamRouter)
app.listen(port, () => { console.log(`The football server is listening on port ${port}`) })