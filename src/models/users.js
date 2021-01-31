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
          type: type.STRING(200),
        },
        email: {
          type: type.STRING(200),
        },
        password: {
          type: type.STRING(200),
        },
        roles: {
          type: type.INTEGER
        }
      },
      {
        freezeTableName: true,
        underscored: true
      }
    );
  };
  