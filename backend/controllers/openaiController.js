import { getOpenAIResponse } from '../services/openaiService.js';
import * as conversationService from '../services/conversationService.js';

export const getMessage = (req, res) => {
  res.status(200).send({
    message: 'Hello from ChatGPT'
  });
};

export const postMessage = async (req, res) => {
  try {
    const { prompt, conversationId } = req.body;
    
    // Create a new conversation if there's no conversationId
    let conversation;
    if (!conversationId) {
      conversation = conversationService.createConversation();
    } else {
      conversation = conversationService.getConversationById(conversationId);
      if (!conversation) {
        conversation = conversationService.createConversation();
      }
    }
    
    // Add user message to conversation
    conversationService.addMessageToConversation(conversation.id, {
      user: true,
      text: prompt
    });
    
    // Get response from OpenAI
    const response = await getOpenAIResponse(prompt);
    const botResponse = response.data.choices[0].text || 'No response from OpenAI';
    
    // Add bot message to conversation
    conversationService.addMessageToConversation(conversation.id, {
      user: false,
      text: botResponse
    });
    
    // Return the response along with the conversation ID
    res.status(200).send({
      bot: botResponse,
      conversationId: conversation.id
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error || 'Something went wrong');
  }
};