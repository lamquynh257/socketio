require('dotenv').config()
const mysql = require('mysql');
const config = require('../Config/config');
const con = mysql.createPool(config.mysql); //kết nối pooling không cần connect và end
const jwt = require('jsonwebtoken');
const express = require('express')

const app = express()

app.use(express.json())


function GetAccount(req, res) {
      con.query('SELECT * FROM users', (err, data) => {
        
        if(err) {
          res.json(err);
        }
        for (const row of data) {
            if(req.body.username === row.username && req.body.password === row.password){
                
                user = req.body;
                //console.log(user);
                const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
                return(accessToken);
                
            }else{
                res.send("Dang nhap that bai");
            }
        }
      });
      res.redirect('/devices');
  }
module.exports = {
    GetAccount: GetAccount,
    con: con
}