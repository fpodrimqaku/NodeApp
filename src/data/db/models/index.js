'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../../../dbConfig.json')[env];
const db = {};


var sequelize ;
 

/*
new Sequelize("database", "", "", {
  host: "0.0.0.0",
  dialect: "sqlite",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  // Data is stored in the file `database.sqlite` in the folder `db`.
  // Note that if you leave your app public, this database file will be copied if
  // someone forks your app. So don't use it to store sensitive information.
  storage: "./src/repository/db/database.sqlite"
});
*/
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
//todo added pool configs to sequelize
sequelize
  .authenticate()
  .then(function (err) {
    console.log("Connection established.");
  })
  .catch(function (err) {
    console.log("Unable to connect to database: ", err);
  });


export  {sequelize};