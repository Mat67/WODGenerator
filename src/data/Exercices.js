'use strict'
var mouvementsCollection = require('data/mouvements')
var _ = require('underscore')

class Serie {
  constructor () {
    this.mouvements = []
    this.duree = 0
    this.Nom = this.toString()
  }

  addMouvements () {
    // goal corespond au but à atteindre (intensite, force, ...)
    this.mouvements.push(mouvementsCollection[_.random(0, mouvementsCollection.length - 1)])
  }
}

exports.exercices = [
  class Emom extends Serie {
    constructor () {
      super()
      this.rest = 20
    }

    addMouvements () {
      // goal corespond au but à atteindre (intensite, force, ...)
      var mouvement = mouvementsCollection[_.random(0, mouvementsCollection.length - 1)]
      mouvement.repetitions = _.random(1, (60 - this.rest) / mouvement['Vitesse'])
      this.mouvements.push(mouvement)


      var practiceTime = parseInt(mouvement.repetitions, 10) * parseInt(mouvement['Vitesse'], 10)

      // On ajuste le nombre de reps
      if (practiceTime < 60 - this.rest) {
        // Ajout d'un mouvement
        var mouvement2 = mouvementsCollection[_.random(0, mouvementsCollection.length - 1)]
        mouvement.repetitions = _.random(1, practiceTime / mouvement['Vitesse'])
        this.mouvements.push(mouvement2)
      }
    }

    toString () {
      return 'Emom'
    }
  },

  class Ladder extends Serie {
    constructor (duree) {
      super()
    }

    addMouvements () {
      // goal corespond au but à atteindre (intensite, force, ...)
      var mouvement = mouvementsCollection[_.random(0, mouvementsCollection.length - 1)]
      this.mouvements.push(mouvement)
    }

    toString () {
      return 'Ladder'
    }
  }]
