'use strict'
var mouvementsCollection = require('./../data/mouvements')
var _ = require('underscore')

class Serie {
  constructor () {
    this.mouvements = []
    this.duree = 0
    this.Nom = this.toString()
  }

  addMouvements (goal) {
    // goal corespond au but à atteindre (intensite, force, ...)
    this.mouvements.push(mouvementsCollection[_.random(0, mouvementsCollection.length - 1)])
  }
}

exports.exercices = [
  class Emom extends Serie {
    constructor () {
      super()
      this.duree = 60
    }

    setDuree (duree) {
      this.round = duree
    }

    toString () {
      return 'Emom'
    }
  },
  class E2mom extends Serie {
    constructor () {
      // this.duree = 120
      super()
    }

    setDuree (duree) {
      this.round = duree
    }

    toString () {
      return 'E2mom'
    }
  },

  class Ladder extends Serie {
    constructor (duree) {
      // A changer
      // this.repetitions = duree
      super()
    }

    toString () {
      return 'Ladder'
    }
  }]
