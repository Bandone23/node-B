'use strict'
// importamos el obejto de orm para poder hacer nuestro modelo de datos
const Sequelize = require('sequelize')
// llamo a la funcion setupDatabase que se encuentra en db.js para que se asigne
// a la variable (SetupDatabase)
const SetupDatabase = require('../lib/db')
module.exports = function setupAgentModel (config) {
  const sequelize = SetupDatabase(config)

  // se define la estructura que tendra la tabla de la base de datos
  return sequelize.define('agent', {
    uuid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    hostname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    pid: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    connected: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaltValue: false
    }
  })
}
