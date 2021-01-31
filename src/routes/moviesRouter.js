require("dotenv").config();
const router = require("express").Router();

const { sequelize, model } = require('../configs/database');

router.get("/movies", async (req, res) => {
  const getMovies = await model.Movies.findAll();

  res.status(200).send({
    status: 200,
    error: true,
    error_message: {},
    message: "success get all data",
    data: getMovies,
  });
});

module.exports = router;