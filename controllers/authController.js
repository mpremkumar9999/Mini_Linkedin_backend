const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/sendEmail');

let otpStore = {}; // In-memory OTP storage

// Register User & Send OTP
exports.register = async (req, res) => {
  const { name, email, username, password, bio } = req.body;

  if (!name || !email || !username || !password || !bio) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP

    otpStore[email] = {
      otp,
      userData: { name, email, username, password: hashedPassword, bio }
    };

    console.log(`[REGISTER] OTP for ${email}: ${otp}`);
    console.log('[REGISTER] Stored userData:', otpStore[email].userData);

    await sendEmail(
      email,
      'Your OTP for Mini-LinkedIn Registration',
      `Your OTP is: ${otp}`
    );

    return res.status(200).json({ message: 'OTP sent to email' });
  } catch (err) {
    console.error('[REGISTER ERROR]', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Verify OTP & Create User
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  console.log(`[VERIFY OTP] Verifying email: ${email} with OTP: ${otp}`);

  const record = otpStore[email];
  console.log('[VERIFY OTP] Record from store:', record);

  if (!record) {
    return res.status(400).json({ message: 'No OTP found for this email' });
  }

  if (parseInt(otp) !== record.otp) {
    return res.status(400).json({ message: 'Invalid OTP' });
  }

  try {
    const newUser = new User(record.userData);
    console.log('[VERIFY OTP] Creating user with data:', record.userData);

    await newUser.save();
    console.log(`[VERIFY OTP] User saved successfully: ${email}`);

    delete otpStore[email];
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('[VERIFY OTP ERROR]', err);
    return res.status(500).json({ message: 'Registration failed' });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.json({ token, user });
  } catch (err) {
    console.error('[LOGIN ERROR]', err);
    res.status(500).json({ message: 'Login failed' });
  }
};

// Get Current Logged-In User Info
exports.getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    res.json(user);
  } catch (err) {
    console.error('[GET USER ERROR]', err);
    res.status(500).json({ message: 'Error fetching user' });
  }
};

// Stub: Forgot Password
exports.forgotPassword = (req, res) => {
  return res.status(501).json({ message: 'Not implemented yet' });
};

// Stub: Reset Password
exports.resetPassword = (req, res) => {
  return res.status(501).json({ message: 'Not implemented yet' });
};
