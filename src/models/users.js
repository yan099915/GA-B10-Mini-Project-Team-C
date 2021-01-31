const e = require("express");

module.exports = (sequelize, type) => {
    return sequelize.define(
      "users",
      {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        username: {
          type: type.STRING(255),
        },
        email: {
          type: type.STRING(255),
        },
        password: {
          type: type.STRING(255),
        },
        roles: {
          type: type.INTEGER
        },
        first_name: {
          type: type.STRING(255)
        },
        last_name: {
          type: type.STRING(255)
        }
      },
      {
        freezeTableName: true,
        underscored: true
      }
    );
  };
  