const express = require('express');
const loginController = require('../controllers/loginController');
const { loginAuth } = require('../middlewares/loginMiddleware');

const router = express.Router();

router.post('/', loginAuth, loginController.loginRequest);

module.exports = router;