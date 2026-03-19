import express from 'express';
import { getAllPosts, getPost, updatePost, createPost, deletePost } from '../controllers/postController.js';

const router = express.Router();

router.get('/', getAllPosts);

router.get('/:id', getPost);

router.put('/:id', updatePost);

router.post('/', createPost);

router.delete('/:id', deletePost)

export default router;
