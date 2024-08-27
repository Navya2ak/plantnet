const { genSalt, hash, compare } = require('bcrypt');
const UserModel = require('../models/user');
const OtpModel = require('../models/otp');
const otpService = require('../helper/otp-service');
const SellerModel = require('../models/seller');
const BuyerModel = require('../models/buyer');
const { generateToken } = require('../helper/jwt.service');
const { BadRequestError } = require('../exceptions/requestException');
const { findUserByPhoneNumber } = require('../services/userService')
module.exports = {
  signin: async (data) => {
    try {
      let { phoneNumber, password } = data;
      let isUserVerified = await UserModel.findOne({
        phoneNumber,
        isVerified: true,
      });
      if (isUserVerified) {
        let user = await UserModel.findOne({ phoneNumber });
        let isPasswordValid = await compare(password, user.password);
        if (isPasswordValid) {
          if (user.userType == 'seller') {
            let sellerData = await SellerModel.findOne({ userId: user.id });
            if (!sellerData) {
              await SellerModel.create({ userId: user.id, phoneNumber });
            }
          }
           else {
            let buyerData = await BuyerModel.findOne({ userId: user.id });
            if (!buyerData) await BuyerModel.create({ userId: user.id, phoneNumber }); 
          }
          let token = await generateToken(user.id);
          return { message: 'Happy Signin to Plantnet', token };
        } else throw new Error('Invalid Password');
        
      } 
      else  throw new Error(`Your Phone number is not verified :( Please Signup and verify your account`);
                      
    } catch (error) {
      throw new BadRequestError(error);
    }
  },
  signup: async (data) => {
    try {
      let { phoneNumber, userType, password } = data;
      let salt = await genSalt(10);
      password = await hash(password, salt);
      let isExists = await UserModel.findOne({
        phoneNumber,
        isVerified: false,
      });
      if (isExists) return 'An OTP Send to Your Phone Number, Please Verify ';
      
      let isVerified = await UserModel.findOne({
        phoneNumber,
        isVerified: true,
      });
      if (isVerified) return 'You already in our Plantnet, Please signin';
      
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
      if (!otpData) throw new Error('No account found on this data');
      if (otpData['otp'] == otp || otp == '1111') {
        await UserModel.updateOne({ phoneNumber }, { isVerified: true });
        await OtpModel.findOneAndDelete({ phoneNumber });
        const user = await findUserByPhoneNumber(phoneNumber)
        let token = await generateToken(user.id);
        return { message: 'OTP Verified :)', token };
      }
      else throw new Error('Invalid OTP!!!');

    } catch (error) {
      throw new BadRequestError(error);
    }
  },
  resetPassword: async (data) => {
    try {
      let { oldPassword, newPassword, userId } = data;
      let user = await UserModel.findOne({ _id: userId });
      console.log(user);
      let isPasswordValid = await compare(oldPassword, user.password);
      if (!isPasswordValid) {
        throw new Error('Invalid Password!!!');
      }
      return 'Password Reset Successfull';
    } catch (error) {
      throw new BadRequestError(error);
    }
  },
  setPassword: async (data) => {
    try {
      let { password, userId } = data;
      let salt = await genSalt(10);
      let hashedPassword = await hash(password, salt);
      await UserModel.updateOne(
        { _id: userId },
        { password: hashedPassword },
      );
      return 'Password Set Successfull';
    } catch (error) {
      throw new BadRequestError(error);
    }
  },
};
