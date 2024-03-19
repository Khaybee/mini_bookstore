const bcrypt = require('bcrypt');
const bcSaltRounds = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken')
const {getConnection, runQuery} = require('../models/dbPool')
const {insertQuery, loginSyntax} = require('../models/sqlcommand')


const secretKey = "userSecretKey"

const login = async (req, res)=> {
     const credentials = {
          username : req.body.username,
          // userpassword: bcrypt.hashSync(req.body.userpassword, bcSaltRounds)
          userpassword: req.body.userpassword
     }

     const connection = await getConnection();

     try {
          const checkUser = await runQuery(connection, loginSyntax, [credentials.username])
          const checkPass = await bcrypt.compare(credentials.userpassword, checkUser[0].userpassword)

          if (checkPass){
               const token = jwt.sign(credentials, secretKey)
               console.log(token)
               res.status(200).json({message: checkUser})
          } else {
               res.status(400).json({message: "Wrong Password" })
          }
     }
     catch (err) {
          res.status(501).json({meessage: "Invalid username. Do you want to create an account?"})
     }
}

module.exports = {login}