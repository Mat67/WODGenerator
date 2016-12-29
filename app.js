require('app-module-path').addPath(__dirname + '/src/')

var express = require('express')
var bodyParser = require('body-parser')

var routes = require('routes')

var app = express()

// parse to json
app.use(bodyParser.json())

routes.configure(app)

console.log('Listening port 8080')
app.listen(8080)
