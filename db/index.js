const sequelize = require('sequelize');
const database = process.env.SQL_DATABASE;
const username = process.env.SQL_USER;
const password = process.env.SQL_PASSWORD;
const connection = process.env.INSTANCE_CONNECTION_NAME;
const host = connection ? `/cloudsql/${connection}` : 'localhost';

module.exports = new sequelize(database || ('textybot', {
  dialect: 'postgres',
  host,
}));

// module.epxports = new sequelize(database, username, password, {
//   dialect: 'postgres',
//   host,
//   pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//   },
//   dialectOptions: {
//       socketPath: host,
//   },
//   logging: false,
//   operatorsAliases: false
// });
