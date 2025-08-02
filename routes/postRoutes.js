const express = require('express');
const router = express.Router();
const {
  createPost, getAllPosts, getPostsByUser, updatePost, deletePost
} = require('../controllers/postController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createPost);
router.get('/', getAllPosts);
router.get('/:userId', getPostsByUser);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

module.exports = router;
