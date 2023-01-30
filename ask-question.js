import cohere from 'cohere-ai';

cohere.init('bwcARddVkamySvAt3HroNuwE6Zu4TD1R8bjuV3py');

export async function askQuestion(input) {
  const response = await cohere.generate({
    model: 'command-xlarge-20221108',
    prompt: input,
    max_tokens: 200,
    temperature: 0.9,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE',
  });

  return response.body.generations[0].text;
}
