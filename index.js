var express = require('express')
var bodyParser = require('body-parser')
var app = express()

// parse to json
app.use(bodyParser.json())

app.post('/login', function (req, res) {
  if (!req.body) return res.sendStatus(400)

  console.log(req.body)
  res.send('welcome, ' + req.body.username)
})

console.log('Listening port 8080')
app.listen(8080)
