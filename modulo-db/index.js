// utilizo el modo estricto de js
'use strict'


// se llama a la configuracion de la base de datos desde el archivo db.js
// se llama la estructura del agente desde carpeta models / agent.js
// se llama la estructura de las metricas desde carpeta models / metric.js

const setupDatabase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')

module.exports = async function (config) {

  const sequelize = setupDatabase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)

  // se definen relaciones de las tablas a crear
  AgentModel.hasMany(MetricModel);
  MetricModel.belongsTo(AgentModel);

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Agente = {}
  const Metrica = {}

  return {
    Agente,
    Metrica

  }
}
