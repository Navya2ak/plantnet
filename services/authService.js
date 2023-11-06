const { genSalt, hash, compare } = require('bcrypt');
const UserModel = require('../models/user');
const OtpModel = require('../models/otp');
const otpService = require('../helper/otp-service');
const sellerModel = require('../models/seller');
const { BadRequestError } = require('../exceptions/requestException');

module.exports = {
  signin: async (req, res) => {
    try {
      let { phoneNumber, password } = req;
      let isUserVerified = await UserModel.findOne({
        phoneNumber,
        isVerified: true,
      });
      if (isUserVerified) {
        let user = await UserModel.findOne({ phoneNumber });
        let isPasswordValid = await compare(password, user.password);
        if (isPasswordValid) {
          let sellerData = await sellerModel.findOne({ userId: user.id });
          if (!sellerData) {
            await sellerModel.create({ userId: user.id, phoneNumber });
          }
          return 'Happy Signin to Plantnet';
        } else {
          throw 'Invalid Password';
        }
      } else {
        throw `Your Phone number is not verified :( Please Signup and verify your account`;
      }
    } catch (error) {
      throw new BadRequestError(error);
    }
  },
  signup: async (data) => {
    try {
      let { phoneNumber, userType, password } = data;
      let salt = await genSalt(10);
      password = await hash(password, salt);
      let isExists = await UserModel.findOne({ phoneNumber, isVerified: true });
      if (isExists) {
        throw 'You already in our Plantnet, Please signin';
      }
      let otp = Math.floor(Math.random() * 123456);
      let isOtpGenerated = await OtpModel.findOne({ phoneNumber });
      if (isOtpGenerated == null) {
        await OtpModel.create({
          phoneNumber,
          otp,
        });
      } else {
        await OtpModel.updateOne({
          phoneNumber,
          otp,
        });
      }
      await otpService.sendOtp(phoneNumber, otp);
      let user = await UserModel.create({
        phoneNumber,
        userType,
        password,
      });
      return user;
    } catch (error) {
      throw new BadRequestError(error);
    }
  },
  verifyOtp: async (data) => {
    try {
      let { phoneNumber, otp } = data;
      let otpData = await OtpModel.findOne({ phoneNumber });
      if (otpData['otp'] != otp) {
        throw 'Invalid OTP!!!';
      }
      await UserModel.updateOne({ phoneNumber }, { isVerified: true });
      await OtpModel.findOneAndDelete({ phoneNumber });
      return 'OTP Verified :)';
    } catch (error) {
      throw new BadRequestError(error);
    }
  },
};
