"use strict";

const fs = require("fs"),
  path = require("path"),
  Sequelize = require("sequelize"),
  database = process.env.MYSQL_DATABASE,
  username = process.env.MYSQL_USERNAME,
  password = process.env.MYSQL_PASSWORD,
  port = process.env.MYSQL_PORT,
  host = process.env.MYSQL_HOST;

let db = {};

let sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: "mysql",
  port: port,
  logging: false
});

fs.readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function (file) {
    let model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;