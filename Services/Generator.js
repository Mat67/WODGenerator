'use strict'

var random = require('random-js')

const dureeMin = 5
const dureeWod = 60

class Skill {
  constructor (duree) {
    this.duree = duree
  }
}

class Echauffement {
  constructor (duree) {
    this.duree = duree
  }
}

class Metcon {
  constructor (duree) {
    this.duree = duree
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

  this.build = function build () {
    return this.generateSkills().generateMetcon().generateEchauffement()
  }
}

exports.build = function build (values) {
  return new Wod().build()
}
