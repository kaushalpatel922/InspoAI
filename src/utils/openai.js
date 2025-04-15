export async function fetchAIResponse(prompt, type) {
  const basePrompt = {
    blog: `Give me a creative blog post idea about: ${prompt}`,
    social: `Write me a catchy social media caption about: ${prompt}`,
    code: `Write a detailed code snippet for: ${prompt}`,
    email: `Write a marketing email for: ${prompt}`,
  };

try {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: basePrompt[type] }],
      max_tokens: 100,
    }),
  });

  const data = await response.json();

  if (data.choices && data.choices.length > 0) {
    return data.choices[0].message.content.trim();
  } else {
    return "⚠️ No response from AI. Please try again.";
  }
} catch (error) {
  console.error("Error fetching AI response:", error);
  return "❌ Error generating response. Check your API key and network.";
}
}
