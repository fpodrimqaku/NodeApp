'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../../../dbConfig.json')[env];
const db = {};


var sequelize ;
 

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

sequelize
  .authenticate()
  .then(function (err) {
    console.log("Connection established.");
  })
  .catch(function (err) {
    console.log("Unable to connect to database: ", err);
  });


export  {sequelize,Sequelize};