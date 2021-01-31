const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = require("../swagger.json");
// define router
const router = require("./routes");

// define app 
const app = express();

// body parser to get data from body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  import router here
app.use(router.moviesRouter);
app.use(router.userRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// export router back to index.js
module.exports = app;