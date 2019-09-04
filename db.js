const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:himitsu@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)

db.sync()
  .then(() => console.log(`updated database (running on ${databaseUrl}`))
  .catch(console.error)

module.exports = db