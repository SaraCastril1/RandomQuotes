const express = require('express');
const router = express.Router();

// Get
const { get_quote } = require('./quotes/get');

//Routes
router.get('/', get_quote);

module.exports = router;