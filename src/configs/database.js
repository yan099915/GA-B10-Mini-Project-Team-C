// import dependencies
require("dotenv").config();
const Sequelize = require("sequelize");
// const UserModel = require("../models/user");
// const TodoModel = require("../models/todo");
// const model = {};

const { USERNAME_DB, PASSWORD_DB, HOST_DB, PORT_DB } = process.env;

// config for connection
const sequelize = new Sequelize("binar-users", USERNAME_DB, PASSWORD_DB, {
  host: HOST_DB,
  port: PORT_DB,
  dialect: "postgres",
});

// test connection
sequelize
  .authenticate()
  .then((res) => {
    console.log("CONNECTION_SUCCESS");
  })
  .catch((err) => console.log("FAILED_TO_CONNECT ", err));

// model.Users = UserModel(sequelize, Sequelize);
// model.Todos = TodoModel(sequelize, Sequelize);

// model.Users.hasMany(model.Todos, {
//   foreignKey: "user_id"
  
// })
// model.Todos.belongsTo(model.Users)

// module.exports = {
//   sequelize,
//   model,
// };