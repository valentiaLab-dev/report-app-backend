const config = require("./utils/config");
const express = require('express')
const app = express()

app.use(express.json())

const middleware = require('./utils/middleware')
app.use(middleware.morganLogger)
app.use(middleware.tokenExtractor)

const reports = require('./controllers/report')

app.use('/api/reports', reports)

app.use(middleware.errorHandler)

module.exports = app