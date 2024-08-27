const UserModel = require('../models/user');
const { BadRequestError } = require('../exceptions/requestException');
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
  checkUserVerifiedByNumber: async (phoneNumber) => {
    try {
      return await UserModel.findOne({ phoneNumber },'isVerified');
    } catch (e) {
      throw new BadRequestError(e);
    }
  },
  getUserById: async (userId) => {
    try {
      return await UserModel.findOne({ userId }, 'isVerified');
    } catch (e) {
      throw new BadRequestError(e);
    }
  },
  checkUnverifiedUserByNumber: async (phoneNumber) => {
    try {
      return await UserModel.findOne({ phoneNumber, isVerified:false });
    } catch (e) {
      throw new BadRequestError(e);
    }
  },
  createUser: async (phoneNumber,userType,password) => {
    try {
      return await UserModel.create({
        phoneNumber,
        userType,
        password,
      });
    } catch (e) {
      throw new BadRequestError(e);
    }
  },
};
