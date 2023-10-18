const express = require('express');

const SearchController = require('../Controllers/search.controller');

const router = express.Router();

router.get('/', SearchController.getSearchedMovie);

module.exports = router;
