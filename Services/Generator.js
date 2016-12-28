'use strict'

var random = require('random-js')
var mouvements = require('../data/Mouvements')
const dureeMin = 5
const dureeWod = 60

class Exercice {
  constructor (duree) {
    this.duree = duree
  }
  this.duree = duree
  this.Exercices = []
}

class Skill extends Exercice {
  constructor (duree) {
    super(duree)
  }
}

class Echauffement extends Exercice {
  constructor (duree) {
    super(duree)
  }
}

class Metcon extends Exercice {
  constructor (duree) {
    super(duree)
  }
}

function Wod () {
  this.getDureeTotal = function () {
    return (this.echauffement ? this.echauffement.duree : 0) +
      (this.skill ? this.skill.duree : 0) +
      (this.metcon ? this.metcon.duree : 0)
  }

  this.generateSkills = function generateSkills () {
    this.skill = new Skill(random().integer(dureeMin, dureeWod - this.getDureeTotal()))
    // this.skill.duree = random().integer(dureeMin, dureeWod - this.getDureeTotal())
    // this.skill.exercice = generateExercice(this.skill.duree)
    return this
  }

  this.generateMetcon = function generateMetcon () {
    this.metcon = new Metcon(random().integer(dureeMin, dureeWod - this.getDureeTotal()))
    return this
  }

  this.generateEchauffement = function generateEchauffement () {
    this.echauffement = new Echauffement(random().integer(dureeMin, dureeWod - this.getDureeTotal()))
    return this
  }

  var generateFormat = function generateFormat() {

  }

  this.build = function build () {
    // Generation du format du WOD (Metcon, plusieurs skills, Duree)

    // Generation du skills

    // Generation du metcon

    // generation de l'echauffement selon le skills et le metcon

    return this.generateSkills().generateMetcon().generateEchauffement()
  }
}

exports.build = function build (values) {
  return new Wod().build()
}
