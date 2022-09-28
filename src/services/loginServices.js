const { users } = require('../models');

const loginRequest = async ({ email, password }) => {
   const findUser = await users.findOne({ where: { email, password } });
   if (!findUser) {
    return { type: 'invalidFields' };
   }
   return { type: null, message: true };
};

module.exports = {
    loginRequest,
};