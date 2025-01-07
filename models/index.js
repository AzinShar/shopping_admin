'use strict';

const { Sequelize } = require('sequelize');
const User = require('./user'); // Explicitly import the User model
const path = require('path');
const process = require('process');

// Load configuration based on the environment
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    dialectModule: require('mysql2'), // Use mysql2 explicitly
  });
}

// Initialize models
const db = {
  sequelize,
  Sequelize,
  User: User, // Initialize User explicitly
};

// If models have associations, apply them
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
