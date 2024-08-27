const UserModel = require('../models/user');
module.exports = {
  uploadProfilePicture: async (fileData, userId) => {
    try {
      await UserModel.updateOne({ _id: userId }, { profilePic: fileData.path });
      return 'Profile pic updated';
    } catch (e) {
      throw new BadRequestError(e);
    }
  },
  findUserByPhoneNumber: async (phoneNumber) => {
    try {
    return await UserModel.findOne({ phoneNumber });
    } catch (e) {
      throw new BadRequestError(e);
    }
  },
};
