export async function fetchAIResponse(prompt, type) {
    const basePrompt = {
      blog: `Give me a creative blog post idea about: ${prompt}`,
      social: `Write me a catchy social media caption about: ${prompt}`,
      code: `Write a detailed code snippet for: ${prompt}`,
      email: `Write a marketing email for: ${prompt}`,
    };
  }
  