// @flow
import express from 'express';
import Posts from '../controllers/posts';

const router = express.Router();

router.post('/posts', Posts.postMemo);
router.get('/posts', Posts.getMemos);
router.get('/posts/:id', Posts.getMemo);

export default router;
