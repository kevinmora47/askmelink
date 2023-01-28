import cohere from 'cohere-ai';
cohere.init('bwcARddVkamySvAt3HroNuwE6Zu4TD1R8bjuV3py');
async function aiResponse() {
  const response = await cohere.generate({
    model: 'xlarge',
    prompt:
      'Write 5 titles for a blog ideas for the keywords "large language model" or "text generation"',
    max_tokens: 300,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE',
  });
  return response.body.generations[0].text;
}

export { aiResponse };
