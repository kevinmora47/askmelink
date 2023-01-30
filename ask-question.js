import cohere from 'cohere-ai';

cohere.init('bwcARddVkamySvAt3HroNuwE6Zu4TD1R8bjuV3py');

export async function askQuestion(input) {
  const response = await cohere.generate({
    model: 'xlarge',
    prompt: input,
    max_tokens: 500,
    temperature: 0.3,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE',
  });

  const cleanText = response.body.generations[0].text;
  console.log(cleanText);
  return cleanText.replace('--', ' ');
}
