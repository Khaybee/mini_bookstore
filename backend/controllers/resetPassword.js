const bcrypt = require('bcrypt');
const { getConnection, runQuery } = require('../models/dbPool');
const { checkEmailSyntax, updatePassword } = require('../models/sqlcommand');
// const bcSaltRounds = bcrypt.genSaltSync(10);
const bcSaltRounds = bcrypt.genSaltSync(10);


const resetPassword = async(req, res)=>{
     const credentials = {
          email: req.body.email,
          // userpassword: bcrypt.hashSync(req.body.userpassword, bcSaltRounds)
          userpassword: req.body.userpassword
     }

     const connection = await getConnection();

     try{
          const verifyEmail = await runQuery(connection, checkEmailSyntax, [credentials.email])

          if(verifyEmail){
               const changePassword = await runQuery(connection, updatePassword, [credentials.userpassword, credentials.email])
               res.status(200).json({message: "Password has been reset, Go to Login"})
          } else {
               res.status(503).json({message: "Something went wrong!"})
          }
     }
     catch(err){
          // res.status(200).json({message: "No reqistered account with this email. Do you want to create an account?"})
          console.log(err)
     }
}

module.exports = {resetPassword}