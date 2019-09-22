const sequelize = require('sequelize');

module.exports = new sequelize(process.env.DATABASE_NAME || ('textybot', {
  dialect: 'postgres',
  host: 'localhost',
}));
