const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = require("../swagger.json");
const router = require("./routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(router.userRouter);
// app.use(router.authRouter);
// app.use(router.todoRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;