const mysql = require('mysql');

const conn = mysql.createConnection({
    connectLimit: 5,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_products'
})

module.exports = conn;