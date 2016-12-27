var random = require('random-js')

function Wod () {
  this.generateSkills = function generateSkills () {
    return this
  }

  this.generateMetcon = function generateMetcon () {
    return this
  }

  this.generateEchauffement = function generateEchauffement () {
    return this
  }

  this.build = function build () {
    return this.generateSkills().generateMetcon().generateEchauffement()
  }
}

exports.build = function build (values) {
  return new Wod().build()
}
