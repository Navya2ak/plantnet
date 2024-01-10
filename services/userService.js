module.exports = {
  uploadProfilePicture: async (data) => {
    try {
      console.log('file details', data);
      return 'Profile pic updated';
    } catch (e) {
      throw new BadRequestError(e);
    }
  },
};
