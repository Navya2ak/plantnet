const buyerService = require('../services/buyerService');
const sellerService = require('../services/sellerService');

module.exports = {
  completeBuyerProfile: async (req, res, next) => {
    try {
      let data = req.body;
      data['userId'] = req.userId; 
      let response = await buyerService.completeBuyerProfile(data);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
  addPlantToCart: async (req, res, next) => {
    try {
      let data = req.body;
      data['userId'] = req.userId;
      let response = await buyerService.addPlantToCart(data);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
  removePlantFromCart: async (req, res, next) => {
    try {
      let data = req.body;
      data['userId'] = req.userId;
      let response = await buyerService.removePlantFromCart(data);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
  addPlantTowishlist: async (req, res, next) => {
    try {
      let data = req.body;
      data['userId'] = req.userId;
      let response = await buyerService.addPlantTowishlist(data);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
  removePlantFromwishlist: async (req, res, next) => {
    try {
      let data = req.body;
      data['userId'] = req.userId;
      let response = await buyerService.removePlantFromwishlist(data);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
  rateAshop: async (req, res, next) => {
    try {
      let response = await sellerService.updateRatingofShop(req.body);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
  likePlant: async (req, res, next) => {
    try {
      let response = await buyerService.likePlant(req.body);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
  listCart: async (req, res, next) => {
    try {
      let response = await buyerService.listCart(req.body);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
  listWishlist: async (req, res, next) => {
    try {
      let response = await buyerService.listWishlist(req.body);
      return res.status(200).json({ response });
    } catch (e) {
      return next(e);
    }
  },
};
