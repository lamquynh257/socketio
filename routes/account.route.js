const express = require('express');
const accountController = require('../Controller/accountController');


const router = express.Router();

// signup routes
router.post("/signup", accountController.signup);
// login routes
router.post("/", accountController.login);


module.exports = router;