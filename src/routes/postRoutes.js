const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');
const { postMiddlware, updateMiddlware } = require('../middlewares/postMiddleware');
const { checkCategory } = require('../middlewares/categoryMiddleware');

const router = express.Router();

router.post('/', authMiddleware, postMiddlware, checkCategory, postController.insertPost);
router.get('/:id', authMiddleware, postController.getPostsById);
router.put('/:id', authMiddleware, updateMiddlware, postController.updatePost);
router.get('/', authMiddleware, postController.getPosts);
router.delete('/:id', authMiddleware, postController.deletePost);

module.exports = router;
