const mysql = require('mysql2')

const connect = mysql.createPool({
     connectionLimit: 10,
     host: 'b1an8rie9t1ceflxeesl-mysql.services.clever-cloud.com',
     user: 'u9gjpv9nay25xfth',
     password: '0xuxjSVaUuTh7buNf67y',
     database: 'b1an8rie9t1ceflxeesl',
})

// const insertQuery = "insert into user_details(username, email, userpassword) values(?,?,?)"

const getConnection = () => {
     return new Promise((resolve, reject) => {
          connect.getConnection((err, connection)=> {
               if (err){
                    reject(err)
               } else{
                    resolve(connection)
               }
          })

     })
}

const runQuery = (connection, sql_command, values) => {
     return new Promise((resolve, reject)=> {
          connection.query(sql_command, values, (err, result)=> {
               connection.release();
               if (err){
                    reject(err)
               }
               else{
                    resolve(result)
               }
          } )
     })
}

module.exports = {getConnection, runQuery}