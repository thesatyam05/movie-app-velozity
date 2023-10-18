const express = require('express');

const FavoriteController = require('../Controllers/favorite.controller');

const router = express.Router();

router.get('/all', FavoriteController.getFavorite);
router.post('/', FavoriteController.modifyFavorite);

module.exports = router;
