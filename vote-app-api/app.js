const express = require('express')
const app = express()

const morgan = require('morgan')
const bodyParser = require('body-parser')

const voteRoutes = require('./api/routes/votes')

app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/vote', voteRoutes)


module.exports = app