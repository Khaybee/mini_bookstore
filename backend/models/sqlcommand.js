const mysql = require('mysql2')

const insertQuery = "insert into users(username, email, userpassword) values(?,?,?)"

const loginSyntax = "select * from users where username = ?"

const checkEmailSyntax = "select * from users where email = ?"

const updatePassword = "update users set userpassword = ? where email = ?"

module.exports = {insertQuery, loginSyntax, checkEmailSyntax, updatePassword}