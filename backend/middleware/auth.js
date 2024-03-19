const jwt = require('jsonwebtoken');

const verifyAUTH = (req, res, next) => {
     // const bearer = req.headers['authorization']
     const bearer = req.headers["authorization"]

     if (typeof bearer == "undefined") {
          res.status(403).json({ message: "Unauthorized User" })
     } else {
          try {
               const fullbearer = bearer.split(' ')
               // console.log(fullbearer)
               req.webToken = fullbearer[1];
               req.decoder = jwt.verify(fullbearer[1], "userSecretKey")
               console.log(req.decoder)
          }
          catch (err) {
               res.status(403).json({ message: "Invalid token" })
          }
     }
     // console.log(bearer);
     next();
}

// verifyAUTH()
module.exports = {verifyAUTH}