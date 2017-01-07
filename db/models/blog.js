const Sequelize = require('sequelize');
const db = require('../db');

const BlogPost = db.define('blog-post', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	imgSrc: {
		type: Sequelize.STRING,
	},
	caption: {
		type: Sequelize.STRING,
	},
	content: {
		type: Sequelize.JSON,
		allowNull: false
	},
	date: {
		type: Sequelize.DATEONLY,
		defaultValue: Date.now()
	}
}, {
	getterMethods: {
		truncatedContent: function() {
			return (this.content.length > 500) ? this.content.slice(0, 250) + '...' : null
		}
	}
});

module.exports = BlogPost;
