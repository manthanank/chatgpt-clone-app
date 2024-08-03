import { getOpenAIResponse } from '../services/openaiService.js';

export const getMessage = (req, res) => {
  res.status(200).send({
    message: 'Hello from ChatGPT'
  });
};

export const postMessage = async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await getOpenAIResponse(prompt);
    res.status(200).send({
      bot: response.data.choices[0].text || 'No response from OpenAI'
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error || 'Something went wrong');
  }
};
