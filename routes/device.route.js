const express = require('express');
const deviceController = require('../Controller/devicesController');

const router = express.Router();

router.get('/devices', deviceController.index);
router.get('/devices/add', deviceController.create);
router.post('/devices/add', deviceController.store);
router.post('/devices/delete', deviceController.destroy);
router.get('/devices/edit/:id', deviceController.edit);
router.post('/devices/edit/:id', deviceController.update);

module.exports = router;