const tokenn = require('../Controller/accountController');
const jwt = require("jsonwebtoken");
// requiredtoken

const auth = (req, res, next) => {
  //const token = jwt.sign(req.body, process.env.ACCESS_TOKEN_SECRET);
         // console.log(token, "token####");
  try {
    //const token = req.header('Authorization').split(' ')[1];
    const token = jwt.sign(req.body, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "5s"});
    //console.log('token', token);
    if (!token) return res.status(400).json({msg: 'Chưa có JWT'});
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(400).json({ msg: 'JWT sai' });
        req.user = user;
        next();
    });
    } catch (err){

      return res.status (500).json ({ msg: 'Bị lỗi JWT' });
    }
                     
};
module.exports = {
  auth: auth
}