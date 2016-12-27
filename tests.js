var chai = require('chai')
var assert = chai.assert // we are using the "expect" style of Chai
var generator = require('./Services/Generator')

describe('Generator', function () {
  it('Le chainage des generations fonctionnent', function () {
    var resultat = generator.build()
    assert.isNotNull(resultat)
  })
})
