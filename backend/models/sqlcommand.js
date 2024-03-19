const mysql = require('mysql2')

const insertQuery = "insert into user_details(username, email, userpassword) values(?,?,?)"

const loginSyntax = "select * from user_details where username = ?"

const checkEmailSyntax = "select * from user_details where email = ?"

const updatePassword = "update user_details set userpassword = ? where email = ?"

module.exports = {insertQuery, loginSyntax, checkEmailSyntax, updatePassword}