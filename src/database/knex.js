var environment = process.env.NODE_ENV || 'development'

const config = {
  client: 'pg',
  connection: {
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_DATABASE,
   host: process.env.DB_HOST,
  },
 }

module.exports = require('knex')(config)
