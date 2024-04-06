const mysql = require("mysql2")

const pool =mysql.createPool({
    host:'localhost',
    user:'root',
    database:'backend1',
    password:process.env.DATABASE_PASSWORD
})

module.exports=pool.promise()