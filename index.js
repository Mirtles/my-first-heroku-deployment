const express = require('express')
const Team = require("./team/model")
const teamRouter = require('./team/router')

const app = express()
const port = process.env.PORT || 4000

app.use(teamRouter)
app.listen(port, () => { console.log(`The football server is listening on port ${port}`) })