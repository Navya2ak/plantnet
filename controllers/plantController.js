const plantService = require('../services/plantService');
module.exports = {
  listPlantsCateogeries: async (req, res, next) => {
    try {
      let response = await this.plantService.listPlantsCateogeries();
      return response;
    } catch (error) {
      console.log('error', error);
    }
  },
};
