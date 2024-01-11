const jwt = require('jsonwebtoken');

module.exports = {
  generateToken: async (userId) => {
    try {
      const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      return token;
    } catch (error) {
      console.log('error', error);
    }
  },
  verifyToken: async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.userId;
      next();
    } catch (error) {
      res.status(401).json({ error: 'Invalid token' });
    }
  },
};
