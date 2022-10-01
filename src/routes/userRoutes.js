const express = require('express');
const userController = require('../controllers/userController');
const { userMiddleware } = require('../middlewares/userMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', userMiddleware, userController.insertUser);
router.get('/', authMiddleware, userController.getUser);
router.get('/:id', authMiddleware, userController.getUserById);

module.exports = router;
