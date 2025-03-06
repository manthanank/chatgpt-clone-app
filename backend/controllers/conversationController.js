import * as conversationService from '../services/conversationService.js';

export const getAllConversations = (req, res) => {
  try {
    const conversations = conversationService.getAllConversations();
    // Return only necessary data for the list view
    const simplifiedConversations = conversations.map(conv => ({
      id: conv.id,
      title: conv.title,
      createdAt: conv.createdAt
    }));
    res.status(200).json(simplifiedConversations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getConversation = (req, res) => {
  try {
    const { id } = req.params;
    const conversation = conversationService.getConversationById(id);
    
    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }
    
    res.status(200).json(conversation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createConversation = (req, res) => {
  try {
    const { title } = req.body;
    const conversation = conversationService.createConversation(title);
    res.status(201).json(conversation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateConversation = (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const conversation = conversationService.updateConversation(id, updates);
    
    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }
    
    res.status(200).json(conversation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteConversation = (req, res) => {
  try {
    const { id } = req.params;
    const success = conversationService.deleteConversation(id);
    
    if (!success) {
      return res.status(404).json({ error: 'Conversation not found' });
    }
    
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const addMessage = (req, res) => {
  try {
    const { id } = req.params;
    const message = req.body;
    
    const conversation = conversationService.addMessageToConversation(id, message);
    
    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }
    
    res.status(200).json(conversation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};