const mysql = require('mysql');

const conn = mysql.createConnection({
    connectLimit: 5,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_crud_funcionarios'
})

module.exports = conn;