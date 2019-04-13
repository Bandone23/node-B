'use strict'
// importamos el obejto de orm para poder hacer nuestro modelo de datos
const Sequelize = require('sequelize')
// llamo a la funcion setupDatabase que se encuentra en db.js para que se asigne
// a la variable (SetupDatabase)
const SetupDatabase = require('../lib/db')
module.exports = function setupMetricModel (config) {
  const sequelize = SetupDatabase(config)

  // se define la estructura que tendra la tabla de la base de datos
  return sequelize.define('metric', {
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    value: {
      type: Sequelize.TEXT,
      allowNull: false
    }

  })
}
