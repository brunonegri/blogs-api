const express = require('express');
const userController = require('../controllers/userController');
const { userMiddleware } = require('../middlewares/userMiddleware');

const router = express.Router();

router.post('/', userMiddleware, userController.insertUser);

module.exports = router;
