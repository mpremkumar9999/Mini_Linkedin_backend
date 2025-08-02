const Post = require('../models/Post');
const User = require('../models/User');

exports.createPost = async (req, res) => {
  const { content } = req.body;
  const post = await Post.create({ userId: req.userId, content });
  res.status(201).json(post);
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 }).populate('userId', 'name');
  res.json(posts);
};

exports.getPostsByUser = async (req, res) => {
  const posts = await Post.find({ userId: req.params.userId }).sort({ createdAt: -1 });
  res.json(posts);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post || post.userId.toString() !== req.userId) {
    return res.status(403).json({ message: 'Not allowed' });
  }
  post.content = req.body.content;
  await post.save();
  res.json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post || post.userId.toString() !== req.userId) {
    return res.status(403).json({ message: 'Not allowed' });
  }
  await post.deleteOne();
  res.json({ message: 'Deleted' });
};
