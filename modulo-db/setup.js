'use strict'
const debug = require('debug')('modulo-db:db:setup')
const db = require('./')

async function setup () {
  const config = {
    database: process.env.DB_NAME || 'nodeavanzado',
    username: process.env.DB_USER || 'bryan',
    password: process.env.DB_PASS || '1234',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    operatorsAliases: false,
    setup: true
   
}

await db(config).catch(handleFatalError)

console.log('Success!')
process.exit(0)
}

function handleFatalError (err) {
console.error(err.message)
console.error(err.stack)
process.exit(1)
}

setup()