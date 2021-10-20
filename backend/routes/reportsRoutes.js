const express = require('express');
const exportStudendsToCsv = require('../controllers/reportController');
const router = express.Router();

router.route('/').get(exportStudendsToCsv);

module.exports = router;
