const express = require('express');
const postController = require('../controllers/postController');
// const categoryMiddleware = require('../middlewares/categoryMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, postController.insertPost);
// router.get('/', authMiddleware, postController.getCategories);

module.exports = router;
