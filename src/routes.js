var service = require('Services/Generator')

exports.configure = function configure (app) {
  /* app.post('/api/v1/GetWOD', function (req, res) {
    if (!req.body) {
      return res.sendStatus(400)
    }

    res.json({
      'username': req.body.username
    })
  }) */

  app.get('/api/v1/WOD', function (req, res) {
    if (!req.body) {
      return res.sendStatus(400)
    }

    res.json(service.build(req.query.lst))
  })
}
