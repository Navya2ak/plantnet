const plantService=require('../services/plantService')
module.exports = {
    bulkInserCateories: async (req, res, next) => {
        try {
            let response = await plantService.bulkInserCateories();
            return res.status(200).json({ response });
        } catch (error) {
            return next(error);
        }
    }
}