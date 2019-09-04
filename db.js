const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:himitsu@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)

db.sync()
  .then(() => console.log("updated database"))
  .catch(console.error)

module.exports = db