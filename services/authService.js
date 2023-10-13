const { genSalt, hash, compare } = require('bcrypt');
const UserModel = require('../models/user');
const OtpModel = require('../models/otp');
const otpService = require('../helper-services/otp-service');
module.exports = {
  signin: async (req, res) => {
    let { phoneNumber, password } = req;
    let isUserVerified = await UserModel.findOne({
      phoneNumber,
      isVerified: true,
    });
    if (isUserVerified) {
      let user = await UserModel.findOne({ phoneNumber });
      let isPasswordValid = await compare(password, user.password);

      if (isPasswordValid) {
        return 'Happy Signin to Plantnet';
      } else {
        return 'Invalid Password';
      }
    } else {
      return `Your Phone number is not verified :( Please Signup and verify your account`;
    }
  },
  signup: async (data) => {
    let { phoneNumber, userType, password } = data;
    let salt = await genSalt(10);
    password = await hash(password, salt);
    let isExists = await UserModel.findOne({ phoneNumber, isVerified: true });
    if (isExists) {
      return 'You already in our Plantnet, Please signin';
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
  },
  verifyOtp: async (data) => {
    let { phoneNumber, otp } = data;
    let otpData = await OtpModel.findOne({ phoneNumber });
    if (otpData['otp'] != otp) {
      return 'Invalid OTP!!!';
    }
    await UserModel.updateOne({ phoneNumber }, { isVerified: true });
    await OtpModel.findOneAndDelete({ phoneNumber });
    return 'OTP Verified :)';
  },
};
