const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const categoryMiddleware = require('../middlewares/categoryMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', categoryMiddleware, authMiddleware, categoriesController.insertCategorie);

module.exports = router;
