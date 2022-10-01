const { User } = require('../models');
const { generateToken } = require('../utils/JWTToken');
const errorHandle = require('../utils/errorHandle');

const loginRequest = async ({ email, password }) => {
   const user = await User.findOne({ where: { email, password } });

   if (!user) throw errorHandle(400, 'Invalid fields');

   const payload = { userID: user.id, userName: user.displayName };
   
   const token = generateToken(payload);
   return { token };
};

module.exports = {
    loginRequest,
};