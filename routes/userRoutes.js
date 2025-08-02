const express = require('express');
const router = express.Router();
const { getUserProfile } = require('../controllers/userController');
const User = require('../models/User');

// Get user by ID (existing route)
router.get('/:id', getUserProfile);

// ✅ Add route to get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude password
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;
