require("dotenv").config();

const { sequelize, model } = require('../configs/database');

module.exports = {
  findUser: async (username) => {
    username.toUpperCase;
    return await model.Users.findAll({
      where: { username: username },
    });
  },

  insert: async (username, email, password) => {
      return await model.Users.create({
        username,
        email,
        password,
        roles: 0
      }); 
  },
  getTodo: async (user_id) => {
    return await model.Users.findOne({
      where: { id: user_id},
      attributes: [
        "id",
        "username"
      ],
      include: {
        model: model.Todos,
        attributes: [
          "id",
          "name",
          "description",
          "status",
          "user_id",
          "created_at",
          "updated_at"
        ]
      }
    });
  },

  updateUser: async (id, email, password) => {
    return await model.Users.update({
        email,
        password,

    },{
        where: {id: id}
    });
  },
};
