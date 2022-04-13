const mysql = require('mysql');
const config = require('../Config/config');
const con = mysql.createPool(config.mysql); //kết nối pooling không cần connect và end
