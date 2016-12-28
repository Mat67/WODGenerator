'use strict'

var random = require('random-js')
//var mouvements = require('../data/Mouvements')
const dureeEchauffement = [5, 10]
const dureeSkills = [20, 30]
const dureeMetcon = [7, 15]
const dureeWod = 60

class Exercice {
  constructor (duree) {
    this.duree = duree
  }
}

class Skill extends Exercice {
  constructor (duree) {
    if (duree) {
      super(duree)
    }
    else {
      super(random().integer(dureeSkills[0], dureeSkills[1]))
    }
  }
}

class Echauffement extends Exercice {
  constructor (duree) {
    if (duree) {
      super(duree)
    }
    else {
      super(random().integer(dureeEchauffement[0], dureeEchauffement[1]))
    }
  }
}

class Metcon extends Exercice {
  constructor (duree) {
    if (duree) {
      super(duree)
    }
    else {
      super(random().integer(dureeMetcon[0], dureeMetcon[1]))
    }
  }
}

function Wod () {
  this.generateSkills = function generateSkills () {
    this.skill = new Skill()
    // this.skill.duree = random().integer(dureeMin, dureeWod - this.getDureeTotal())
    // this.skill.exercice = generateExercice(this.skill.duree)
    return this
  }

  this.generateMetcon = function generateMetcon () {
    this.metcon = new Metcon()
    return this
  }

  this.generateEchauffement = function generateEchauffement () {
    this.echauffement = new Echauffement()
    return this
  }



  this.build = function build () {
    // Set des multiplicateurs selon les wods souhaité

    // Generation du skills

    // Generation du metcon

    // generation de l'echauffement selon le skills et le metcon

    return this.generateSkills().generateMetcon().generateEchauffement()
  }
}

exports.build = function build (values) {
  return new Wod().build()
}
