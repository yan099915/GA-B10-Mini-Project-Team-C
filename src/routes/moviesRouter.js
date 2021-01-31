require("dotenv").config();
const router = require("express").Router();

const auth = require("../controllers/auth");
const authMiddleware = require("../middlewares/auth");

const { sequelize, model } = require('../configs/database');
const movies = require("../controllers/movies");

// MOVIES
router.get("/movies", authMiddleware.validateToken, movies.list);
router.post("/movies", authMiddleware.validateToken, movies.insert);

// router.get("/movies", async (req, res) => {
//   const getMovies = await model.Movies.findAll();

//   res.status(200).send({
//     status: 200,
//     error: true,
//     error_message: {},
//     message: "success get all data",
//     data: getMovies,
//   });
// });



module.exports = router;