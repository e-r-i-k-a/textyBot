const db = require('./index.js')
const sequelize = require('sequelize');

const Job = db.define('job', {
  jobDate: {
    type: sequelize.DATE,
    allowNull: false,
    defaultValue: Date.now(),
  },
  dateCreated: {
    type: sequelize.DATE,
    allowNull: false,
    defaultValue: Date.now(),
  },
	to: {
    type: sequelize.STRING,
    allowNull: false,
    defaultValue: '+15165102043'
  },
  body: {
    type: sequelize.TEXT,
    allowNull: false,
    defaultValue: 'default text'
  },
})

module.exports = {Job};
