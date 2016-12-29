'use strict'

var random = require('random-js')
var exerciceService = require('Services/exerciceService')
// var _ = require('underscore')
const dureeEchauffement = [5, 10]
const dureeSkills = [20, 30]
const dureeMetcon = [7, 15]

class Exercice {
  constructor (duree) {
    this.duree = duree
    this.exercices = []
    this.facteurIntensite = 1
    this.facteurForce = 1
  }

  generateExercice () {
    var exercice = exerciceService.generateExercice()
    // var exercice = new exercices.exercices[_.random(0, exercices.exercices.length - 1)]()
    // exercice.addMouvements(this.duree)

    this.exercices.push(exercice)
  }
}

class Skill extends Exercice {
  constructor (duree) {
    if (duree) {
      super(duree)
    } else {
      super(random().integer(dureeSkills[0], dureeSkills[1]))
    }
  }
}

class Echauffement extends Exercice {
  constructor (duree) {
    if (duree) {
      super(duree)
    } else {
      super(random().integer(dureeEchauffement[0], dureeEchauffement[1]))
    }
  }
}

class Metcon extends Exercice {
  constructor (duree) {
    if (duree) {
      super(duree)
    } else {
      super(random().integer(dureeMetcon[0], dureeMetcon[1]))
    }
  }
}

function Wod () {
  this.generateSkills = function generateSkills () {
    this.skill = new Skill()
    this.skill.generateExercice()

    return this
  }

  this.generateMetcon = function generateMetcon () {
    this.metcon = new Metcon()
    this.metcon.generateExercice()

    return this
  }

  this.generateEchauffement = function generateEchauffement () {
    this.echauffement = new Echauffement()
    this.echauffement.generateExercice()

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
