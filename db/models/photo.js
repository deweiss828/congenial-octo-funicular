const Sequelize = require('sequelize');
const db = require('../db');

const Photo = db.define('photo', {
	imgSrc: {
		type: Sequelize.STRING,
		allowNull: false
	},
	caption: {
		type: Sequelize.STRING,
		allowNull: false
	},
	location: {
		type: Sequelize.STRING,
		allowNull: false
	},
	date: Sequelize.DATE,
});

module.exports = Photo;
