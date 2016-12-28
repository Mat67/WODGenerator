var chai = require('chai')
var assert = chai.assert // we are using the "expect" style of Chai
var generator = require('./Services/Generator')

describe('Generator', function () {
  it('Echauffement est generé avec une durée', function () {
    var resultat = generator.build()
    assert.isNotNull(resultat)
    assert.isDefined(resultat.echauffement.duree)

    console.log(resultat.echauffement.duree)
  })

  it('Skill est generé avec une durée', function () {
    var resultat = generator.build()
    assert.isNotNull(resultat)
    assert.isDefined(resultat.skill.duree)

    console.log(resultat.skill.duree)
  })

  it('Metcon est generé avec une durée', function () {
    var resultat = generator.build()
    assert.isNotNull(resultat)
    assert.isDefined(resultat.metcon.duree)

    console.log(resultat.metcon.duree)
  })

  it('un exercice pour le skill est généré', function () {
    var resultat = generator.build()
    assert.isNotNull(resultat)
    assert.isDefined(resultat.echauffement.exercice)

    console.log(resultat.echauffement.exercice)
  })
})
