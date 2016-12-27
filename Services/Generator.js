// var random = require('random-js')

function Wod () {
  this.skills = function skills () {
    return this
  }

  this.metcon = function metcon () {
    return this
  }

  this.echauffement = function echauffement () {
    return this
  }

  this.build = function build () {
    return this.skills().metcon().echauffement()
  }
}

exports.build = function build (values) {
  return new Wod().build()
}
