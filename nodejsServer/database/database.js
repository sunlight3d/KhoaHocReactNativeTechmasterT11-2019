const mysql = require('mysql')
const HOST_NAME = "localhost"
const PORT = 3306
const connection = mysql.createConnection({
    host: HOST_NAME,
    user: "root",
    password: "",
    port: PORT,
    database: "reactnativetutorial"
})

connection.connect(error => {
    if (error) throw error;
    console.log("Connected MySQL!")
})
module.exports = connection



