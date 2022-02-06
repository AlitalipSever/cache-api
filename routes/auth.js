const {register, login} = require("../controllers/auth-service")
const router = require("express").Router()

//REGISTER
router.post("/register", register)

//LOGIN
router.post("/login", login)

module.exports = router