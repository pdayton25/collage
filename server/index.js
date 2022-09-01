const express = require('express')
const app = express()
const mysql = require('mysql2')

const db = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'CollageDB'
})

app.get('/', (req, res) => {

    


    // const sqlInsert = "INSERT INTO wallet_addresses (wallet_address) VALUES ('0x35g135fm32462125x1123');"
    // db.query(sqlInsert, (err, result) => {
    //     console.log(err);
    //     res.send('hello patrick');
    // })
})
app.listen(3001, () => {
    console.log('Server is running on port 3001');
})

