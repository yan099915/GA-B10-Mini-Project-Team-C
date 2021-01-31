require("dotenv").config();
const { Op } = require("sequelize");

const { sequelize, model } = require('../configs/database');

module.exports = {
  insert: async (title, genre, release_date, director, budget, featured_song, synopsis) => {
      return await model.Movies.create({
        title,
        genre,
        release_date,
        director,
        budget,
        featured_song,
        synopsis
      }); 
  },
//  GET MOVIES BY TITLE
  get: async (title) => {
    return await model.Movies.findAll({
      where: {
          title: {
            [Op.like]: '%' + title + '%'
          }
        }
    }); 
  },
};
