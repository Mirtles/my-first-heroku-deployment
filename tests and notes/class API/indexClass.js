const express = require('express')
const studentRouter = require('./studentRouter')
const teacherRouter = require('./teacherRouter')

const port = 4000

const app = express()
app.use(studentRouter)
app.use(teacherRouter)

app.listen(port)

