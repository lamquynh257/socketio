const db = require('../Config/db');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// signup
module.exports.signup = async (req, res) => {
    console.log(req.body, "data##");
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    // first check email id already exit
    let emailchkqry = `select email from users where email = '${email}' `;
    db.con.query(emailchkqry, async (err, result) => {
      if (err) throw err;
      // check email id already exits
      if (result.length > 0) {
        res.send({
          status: false,
          msg: "email id already exits",
        });
      } else {
        // password decrypt
        decryptpwd = await bcrypt.hash(password, 10);
        // insert data
        let insertqry = `insert into users(username,password,email) values('${username}','${decryptpwd}','${email}') `;
        db.con.query(insertqry, (err, result) => {
          if (err) throw err;
          res.send({
            status: true,
            msg: "user register successful",
          });
        });
      }
    });
  };

// login
module.exports.login = (req, res) => {
    console.log(req.body, "login");
    let email = req.body.email;
    console.log(req.body.email, "mail");
    let password = req.body.password;
  
    // checkemailid
    let chkemailid = `select * from users where email = '${email}'`;
    db.con.query(chkemailid, async (err, result) => {
      if (err) throw err;
  
      if (result.length > 0) {
        let data = {
          username: result[0].username,
          email: result[0].email,
        };
        //    check password
        let chkpwd = await bcrypt.compare(password, result[0].password);
        console.log(chkpwd, "chkpwd##");
        if (chkpwd === true) {
            const token = jwt.sign({ data }, process.env.ACCESS_TOKEN_SECRET);
          console.log(token, "token###");
          //res.send({
           // status: true,
           // token: token,
           // result: data,
           // msg: "user login successful",
         // });
          res.redirect('/devices');
        } else {
          res.send({
            status: false,
            msg: "invalid user",
          });
        }
      } else {
        res.send({
          status: false,
          msg: "invalid email id",
        });
      }
    });
  };

  //verifytokens
function verifyToken(token) {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, result) => {
      if (err) {
        let a = { status: false };
        return a;
      } else {
        let b = { status: true };
        return b;
      }
    });
  }
