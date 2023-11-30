const express = require('express');
const { login, register, getUserData } = require('../Controllers/UserController');
const router = express.Router();
const mongoose = require('mongoose')

const User = require('../Models/UserSchema');

// Login
router.post('/login', login)

// SignUp 
router.post('/register', register)

router.get('/userData/:id', getUserData)
module.exports = router;

