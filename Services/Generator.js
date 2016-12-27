var random = require('random-js')

wod = {}

skills = function skills () {
  return this;
}

metcon = function metcon () {
  return this;
}

echauffement = function echauffement () {
  return this;
}



exports.build = function build (values) {
  return skills().metcon().echauffement().wod
  // var wod = {
  //   Echauffement: random().integer(1, 100),
  //   Skills: random().integer(1, 100),
  //   Metcon: random().integer(1, 100)
  // }


  return wod
}
