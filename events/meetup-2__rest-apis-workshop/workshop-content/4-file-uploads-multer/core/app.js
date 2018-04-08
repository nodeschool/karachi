const express = require('express')
const path = require('path')
const timeout = require('connect-timeout')
const logger = require('morgan')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')

const files = require('./routes/files')

const app = express()

app.use(timeout('2m')) // timeout after 2mins
app.use(logger('dev'))
app.use(bodyParser.json({limit: '5mb'}))
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }))
app.use(haltOnTimeout)
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use('/files', files)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.json({
    err: 'error',
    message: err.message || 'internal server error',
    stack: err.stack || 'internal server error'
  })
})

function haltOnTimeout (req, res, next) {
  if (!req.timedout) {
    next()
  }
}

module.exports = app
