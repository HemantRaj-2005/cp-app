const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @desc Register a new user
// @route POST /api/auth/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, phone, dob, institute } = req.body;

  // Check if user with the same email already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Create new user
  const user = await User.create({
    username,
    email,
    password, // Remember to hash passwords securely before saving them
    phone,
    dob,
    institute,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id), // Generate token upon successful registration
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc Authenticate user & get token
// @route POST /api/auth/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });

  // Validate user and password
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id), // Generate token upon successful authentication
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

module.exports = { registerUser, authUser };
