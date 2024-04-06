// const mysql = require("mysql2")

// const pool =mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'backend1',
//     password:process.env.DATABASE_PASSWORD
// })

// module.exports=pool.promise()

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "backend1",
  "root",
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
    root: "localhost",
  }
);
module.exports = sequelize;
