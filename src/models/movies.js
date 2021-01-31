const e = require("express");

module.exports = (sequelize, type) => {
    return sequelize.define(
      "movies",
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
        release_date: {
          type: type.DATE,
        },
        director: {
          type: type.STRING(255),
        },
        budget: {
          type: type.STRING(50),
        },
        featured_song: {
          type: type.STRING(255),
        },
        synopsis: {
          type: type.STRING(1000),
        }
      },
      {
        freezeTableName: true,
        underscored: true
      }
    );
  };
  