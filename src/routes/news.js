const express = require('express');
const router = express.Router();

const newController = require('../app/controllers/NewControllers');

router.use('/', newController.index);

module.exports = router;