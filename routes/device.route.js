const express = require('express');
const deviceController = require('../Controller/devicesController');
const  auth = require('../middleware/auth');

const router = express.Router();

router.get('/', deviceController.index);
router.get('/add', deviceController.create);
router.post('/add', deviceController.store);
router.post('/delete', deviceController.destroy);
router.get('/edit/:id', deviceController.edit);
router.post('/edit/:id', deviceController.update);

module.exports = router;