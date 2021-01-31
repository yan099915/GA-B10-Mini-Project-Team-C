require("dotenv").config();
const router = require("express").Router();

const auth = require("../controllers/auth");
const authMiddleware = require("../middlewares/auth");

router.post("/register", authMiddleware.validateBody, auth.insert);
router.post("/login", authMiddleware.validateBody, auth.login);
router.put("/users", authMiddleware.validateToken, auth.update);

module.exports = router;



