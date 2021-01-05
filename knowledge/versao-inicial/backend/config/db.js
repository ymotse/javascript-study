const config = require('../knexfile.js')
const knex = require('knex')(config)

// knex.migrate.latest([config]) //Rodar knex:latest quando iniciar [Não Recomendado]

module.exports = knex