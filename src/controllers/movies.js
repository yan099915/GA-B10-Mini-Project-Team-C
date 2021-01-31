require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// APLICATION FOR MOVIES LOOK AT DEPENDENCIES DIRECTORY
const application = require("../services/movies");

module.exports = {
// ADD MOVIES
  insert: async (req, res) => {
    const { title, genre, release_date, director, budget, featured_song, synopsis } = req.body

    // PLEASE USE THIS ROLES DATA TO AUTHENTICATE IF ONLY ADMIN CAN ADD MOVIES USER = 0 ADMIN = 1
    const roles = data.roles
    const addMovies = await application.insert(
      title,
      genre,
      release_date,
      director,
      budget,
      featured_song,
      synopsis
    )
    res.send({
      status: 200,
      error: true,
      error_message: {},
      message: "Success add movies data",
      data: {addMovies},
    });
  },
//  GET MOVIES COLLECTION LIST 
  list: async (req, res) => {
    const { title } = req.body

    const findMovies = await application.get(
      title
    )
    res.send({
      status: 200,
      error: false,
      error_message: {},
      message: "Result",
      data: {findMovies},
    });
  },

  update: async (req, res) => {
    const { email, password, first_name, last_name } = req.body
    const id = data.id;

    // IF TOKEN VALID USER CAN UPDATE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const updateData = await application.updateUser(
        id,
        email,
        hashedPassword,
        first_name,
        last_name
    )
    res.send(updateData)
  }
};
