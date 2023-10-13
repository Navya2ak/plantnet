const Usermodel = require('../models/user');
module.exports = {
  updateSellerProfile: async (data) => {
    let { name, phoneNumber } = data;
    await Usermodel.findOneAndUpdate(phoneNumber, { name });
  },
};
