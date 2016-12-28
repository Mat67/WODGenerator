var chai = require('chai')
var assert = chai.assert // we are using the "expect" style of Chai
var generator = require('./Services/Generator')

describe('Generator', function () {
  it('Le chainage des generations fonctionnent', function () {
    var resultat = generator.build()
    assert.isNotNull(resultat)
    assert.isNotNull(resultat.echauffement.duree)
    assert.isNotNull(resultat.skill.duree)
    assert.isNotNull(resultat.metcon.duree)

    console.log(resultat.echauffement.duree)
    console.log(resultat.skill.duree)
    console.log(resultat.metcon.duree)
  })
})
