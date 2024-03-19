const mysql = require('mysql2')

const connect = mysql.createPool({
     connectionLimit: 10,
     host: 'localhost',
     user: 'root',
     password: 'Heavenfreak11',
     database: 'mini_library',
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