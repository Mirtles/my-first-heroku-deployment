const express = require('express')
const router = require('./router')

const port = 4000

const app = express()
app.use(router)

app.listen(port)
