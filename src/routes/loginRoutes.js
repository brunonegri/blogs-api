const express = require('express');
const loginController = require('../controllers/loginController');
const { loginAuth } = require('../middlewares/loginAuth');

const router = express.Router();

router.post('/', loginAuth, loginController.loginRequest);

module.exports = router;