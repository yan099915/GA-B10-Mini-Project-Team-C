const e = require("express");

module.exports = (sequelize, type) => {
    return sequelize.define(
      "Movies",
      {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: type.STRING(255),
        },
        genre: {
          type: type.STRING(255),
        },
        realease_date: {
          type: type.DATE,
        },
        director: {
          type: type.STRING(255),
        },
        budget: {
          type: type.STRING(255),
        },
        featured_song: {
          type: type.STRING(255),
        }
      },
      {
        freezeTableName: true,
        underscored: true
      }
    );
  };
  