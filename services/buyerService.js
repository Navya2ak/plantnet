const BuyerModel = require('../models/buyer');
module.exports = {
  updateBuyerProfile: async (data) => {
   try{ let { name, phoneNumber } = data;
    await BuyerModel.findOneAndUpdate(phoneNumber, { name });}
    catch(e)
    {
      throw new Error(e)
    }
  },
  completeBuyerProfile: async (data) => {
 try {  let { name, phoneNumber } = data;
    await BuyerModel.findOneAndUpdate(phoneNumber, { name })
  }
  catch(e)
  {
    throw new Error(e)

  }
}
}
