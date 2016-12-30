'use strict'
var mouvementsCollection = require('data/mouvements')
var _ = require('underscore')

exports.getMouvement = function getMouvement () {
  return mouvementsCollection.getData()[_.random(0, mouvementsCollection.getData().length - 1)]
}
