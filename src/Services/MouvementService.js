'use strict'
var mouvementsCollection = require('data/mouvements')
var _ = require('underscore')

exports.getMouvement = function getMouvement() {
    return mouvementsCollection[_.random(0, mouvementsCollection.length - 1)]
}
