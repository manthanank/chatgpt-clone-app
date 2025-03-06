import express from 'express';
import * as conversationController from '../controllers/conversationController.js';

const router = express.Router();

router.get('/', conversationController.getAllConversations);
router.get('/:id', conversationController.getConversation);
router.post('/', conversationController.createConversation);
router.put('/:id', conversationController.updateConversation);
router.delete('/:id', conversationController.deleteConversation);
router.post('/:id/messages', conversationController.addMessage);

export default router;