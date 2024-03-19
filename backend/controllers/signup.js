const bcrypt = require('bcrypt');
const bcSaltRounds = bcrypt.genSaltSync(10);
const {getConnection, runQuery} = require('../models/dbPool')
const {insertQuery} = require('../models/sqlcommand')


const signup = async (req, res)=> {
     const credentials = {
          username : req.body.username,
          email: req.body.email,
          userpassword: req.body.userpassword
          // userpassword: bcrypt.hashSync(req.body.userpassword, bcSaltRounds)
     }

     const connection = await getConnection();

     try {
          const result = await runQuery(connection, insertQuery, [credentials.username, credentials.email, credentials.userpassword])
          res.status(200).json({message: result})
     }
     catch(err){
          res.status(501).json(err)
          console.log(err)
     }
}

module.exports = {signup}