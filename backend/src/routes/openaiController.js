import express from 'express';
import { getMessage, postMessage } from '../controllers/openaiController.js';

const router = express.Router();

router.get('/chat', getMessage);
router.post('/chat', postMessage);

export default router;
