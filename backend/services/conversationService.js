import Conversation from '../models/conversation.js';
import { v4 as uuidv4 } from 'uuid';

// In-memory storage for conversations (replace with database in production)
const conversations = [];

export const getAllConversations = () => {
  return conversations;
};

export const getConversationById = (id) => {
  return conversations.find(conv => conv.id === id);
};

export const createConversation = (title) => {
  const id = uuidv4();
  const defaultTitle = title || "New conversation";
  const conversation = new Conversation(id, defaultTitle);
  conversations.unshift(conversation); // Add to beginning of array
  return conversation;
};

export const updateConversation = (id, updates) => {
  const index = conversations.findIndex(conv => conv.id === id);
  if (index === -1) return null;
  
  const conversation = conversations[index];
  const updatedConversation = { ...conversation, ...updates };
  conversations[index] = updatedConversation;
  return updatedConversation;
};

export const deleteConversation = (id) => {
  const index = conversations.findIndex(conv => conv.id === id);
  if (index === -1) return false;
  
  conversations.splice(index, 1);
  return true;
};

export const addMessageToConversation = (id, message) => {
  const conversation = getConversationById(id);
  if (!conversation) return null;
  
  conversation.messages.push(message);
  
  // Update title if it's the first message and a user message
  if (conversation.messages.length === 1 && message.user) {
    conversation.title = message.text.substring(0, 30) + (message.text.length > 30 ? '...' : '');
  }
  
  return conversation;
};