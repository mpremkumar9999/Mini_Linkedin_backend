const User = require('../models/User');
const Post = require('../models/Post');

exports.getUserProfile = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  const posts = await Post.find({ userId: req.params.id }).sort({ createdAt: -1 });
  res.json({ user, posts });
};
