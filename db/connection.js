const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your Mysql password
    password: 'R@m!r3Z*1',
    database: 'election'
});

module.exports = db;