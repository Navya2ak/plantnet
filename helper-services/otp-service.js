const client = require('twilio')(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN,
);
module.exports = {
  sendOtp: async (phoneNumber, otp) => {
    try {
      client.messages.create({
        body: otp,
        from: '+12564084503',
        to: '+918848561387',
      });
      return 'OTP Send!!';
    } catch (error) {
      console.log(error);
    }
  },
};
