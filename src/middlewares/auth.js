const joi = require("joi");
const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = {
  validateBody: (req, res, next) => {
    const { body } = req;
    const registerSchema = joi.object({
      username: joi.string().required(),
      password: joi.string().required().min(3),
      email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    });

    const validatePayloads = registerSchema.validate(body);

    if (!validatePayloads.error) {
      next();
    } else {
      res.send({
        status: 500,
        error: true,
        error_message: validatePayloads.error,
        message: "failed validation",
        data: [],
      });
    }
  },

  validateToken: (req, res, next) => {
    // validasi token disini
    const { authentication } = req.body
    let payload = jwt.verify(authentication, process.env.SECRET_KEY_TOKEN)
    
    if (!payload.error) {
      data = payload
      next()
    } else {
      res.send({
        status: 500,
        error: true,
        error_message: payload.error,
        message: "token is not valid",
        data: [],
      });
    }
  },
};
