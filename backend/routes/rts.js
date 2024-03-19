const express = require('express')
const router = express.Router()
const {createUser} = require('../controllers/users')
const { signup } = require('../controllers/signup')
const { login } = require('../controllers/login')
const { verifyAUTH } = require('../middleware/auth')
const { resetPassword } = require('../controllers/resetPassword')

router.post('/register', createUser) 
router.post('/signup', signup)
router.put('/reset', resetPassword)
router.get('/login', login)
// router.get('/login',verifyAUTH, login)

module.exports = {router}