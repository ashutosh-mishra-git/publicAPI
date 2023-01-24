const route = require('express').Router();
const authController = require('../controller/authController')


// route.post('/login', )
route.post('/signup', authController.post_signup)


module.exports = route