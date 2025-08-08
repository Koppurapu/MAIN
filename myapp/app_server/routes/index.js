const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/Main');

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
