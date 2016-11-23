'use strict';
const path = require('path');
const chalk = require('chalk');
const Sequelize = require('sequelize');
const DATABASE_URL = require(path.join(__dirname, '../config')).DATABASE_URL;

console.log(chalk.yellow('Opening connection to PostgreSQL'));

// create the database instance
module.exports = new Sequelize(DATABASE_URL, {
  logging: true, // set to console.log to see the raw SQL queries
  // native: true // lets Sequelize know we can use pg-native for ~30% more speed
});
