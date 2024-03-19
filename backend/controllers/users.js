const {getConnection, runQuery} = require('../models/dbPool')
const {insertQuery} = require('../models/sqlcommand')

const createUser = async(req, res)=>{
     userCredentials = {
          username: req.body.username,
          email: req.body.email,
          userpassword: req.body.userpassword
     }

     try {
          const addUser = await storeDetails(userCredentials)
          res.status(200).json(addUser)
          // console.log(addUser)

     }
     catch(err) {
          res.status(200).json(err)
          console.log(err)
     }
}

const storeDetails = async(data) => {
     const connection = await getConnection();

     try {
          const result = await runQuery(connection, insertQuery, [data.username, data.email, data.userpassword]);
          return result;
     }
     catch(err) {
          console.log(err);
          return err;
     }
}


module.exports = {createUser}