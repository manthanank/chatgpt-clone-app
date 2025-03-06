import OpenAI from "openai";
import { OPENAI_API_KEY } from "../config.js";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export const getOpenAIResponse = async (prompt) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo", // Update from text-davinci-003
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: prompt },
    ],
    temperature: 0.7,
    max_tokens: 2000,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });

  // Return format the controller expects
  return {
    data: {
      choices: [{ text: response.choices[0].message.content }],
    },
  };
};