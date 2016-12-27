exports.configure = function configure (app) {
  app.post('/api/v1/GetWOD', function (req, res) {
    if (!req.body) {
      return res.sendStatus(400)
    }

    res.json({
      'username' : req.body.username
    })
  })
}
