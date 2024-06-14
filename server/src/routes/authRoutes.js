const express = require('express');
const passport = require('../config/passport');
const { registerUser, authUser } = require('../controllers/authController');
const router = express.Router();

// Local auth routes
router.post('/register', registerUser);
router.post('/login', authUser);

// Google OAuth routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // Generate a JWT token and send it to the client
  const token = generateToken(req.user._id);
  res.redirect(`/login?token=${token}`);
});

module.exports = router;
