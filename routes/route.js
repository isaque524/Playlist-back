// backend/routes/index.js
const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
const adminRouter = require('./admin');

// Main route
router.use('/', apiRouter);

// Admin route
router.use('/admin', adminRouter);

module.exports = router;
