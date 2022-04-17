const tokenn = require('../Controller/accountController');
const jwt = require("jsonwebtoken");
// requiredtoken
function requiredtoken(req, res, next) {
  const tokens  = tokenn.login.token;
  console.log(tokens)
  let headers = req.headers["token"];
  console.log(headers, "token##");
  if (typeof headers !== undefined && headers !== "") {
    req.token = headers;
    //jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err, result) => {
     // if (err) {
      //  res.sendStatus(401)
     // } else {
        next();
     // }
    //});
    
  } else {
    res.send({
      status: false,
      msg: "token required ...",
    });
  }
}
module.exports = {
  requiredtoken: requiredtoken
}