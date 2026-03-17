import Anthropic from '@anthropic-ai/sdk';
import config from '../../../config';


const getTextSummarize = async (payload: any) => {

  const anthropic = new Anthropic({
    apiKey: config.anthropic_api_key
  });
  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-5',
    max_tokens: 300,
    system: 'You are a text summarizer. When asked for text summarize then send back.',
    messages: [
      {
        role: "user",
        content: [
          {
            type: 'text',
            text: `Summarize this text, Limit the lenth to ${100}: ${payload.question}`
          }
        ]
      }
    ]
  });

  return message
};

export const ApiServices = {
  getTextSummarize,
};


