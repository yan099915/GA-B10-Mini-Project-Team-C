require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const application = require("../services/auth");

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    let message = "";
    let data = {};

    // CHECK USERNAME
    const userExist = await application.findUser(username);
    if (userExist.length === 0){
        message = "username is not exist!"
    }

    // data user if exist
    const userProfile = userExist[0].dataValues;
    // ! hashed password userExist from database
    const savedPassword = userProfile.password; 

    // CHECK PASSWORD
    const comparePassword = await bcrypt.compare(
      password,
      savedPassword.trim()
    );
    
    // IF PASSWORD WRONG 
    if (comparePassword === false) {
        message = "password is incorrect";
    } else {
        // IF PASSWORD RIGHT GENERATE TOKEN
        const token = jwt.sign(userProfile, process.env.SECRET_KEY_TOKEN, {
            expiresIn: "300000s",});
            data = token;
        }
    res.send({
        status: 200,
        error: true,
        error_message: {},
        message: message,
        data: data
    });
  },
// REGISTER
  insert: async (req, res) => {
    const { username, email, password } = req.body;

    const checkUsernameExist = await application.findUser(username);

    let message = "";
    if (checkUsernameExist.length !== 0) {
      // IF USERNAME EXIST
      message = "username already registered";
    } else {
      // IF USERNAME DOES NOT EXIST
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      await application.insert(username, email, hashedPassword);
      message = "register sucsess";
    }

    res.send({
      status: 200,
      error: true,
      error_message: {},
      message: message,
      data: [],
    });
  },

  update: async (req, res) => {
    const { email, password } = req.body
    const id = data.id;

    // IF TOKEN VALID USER CAN UPDATE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const todoList = await application.updateUser(
        id,
        email,
        hashedPassword
    )
    res.send(todoList)
  }
};
