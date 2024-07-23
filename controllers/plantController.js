module.exports = {
  listPlantsCateogeries: async (req, res, next) => {
    try {
      let response = await plantService.listPlantsCategories();
      return res.status(200).json({ response });
    } catch (error) {
      return next(error);
    }
  },
  fetchPlantDetails: async (req, res, next) => {
    try {
      let response = await plantService.fetchPlantDetails(req.query);
      return res.status(200).json({ response });
    } catch (error) {
      return next(error);
    }
  },

  // audio video upload
};
