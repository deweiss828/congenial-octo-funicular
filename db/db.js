'use strict';
const path = require('path');
const chalk = require('chalk');
const Sequelize = require('sequelize');
const DATABASE_URI = require(path.join(__dirname, '../config')).DATABASE_URI;

console.log(chalk.yellow('Opening connection to PostgreSQL'));

// create the database instance
module.exports = new Sequelize(DATABASE_URI, {
  logging: true, // set to console.log to see the raw SQL queries
  sync: { force: true },
  // native: true // lets Sequelize know we can use pg-native for ~30% more speed
});
