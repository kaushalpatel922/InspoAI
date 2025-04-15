import { useState } from "react";
import "./App.css";
import "./index.css";
import { fetchAIResponse } from "./utils/openai";

function App() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [type, setType] = useState("blog");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt!");
      return;
    }

    setLoading(true);
    setOutput("⏳ Generating...");
    const aiResponse = await fetchAIResponse(prompt, type);
    setOutput(aiResponse);
    setLoading(false);
  };
  return (
    <>
      <div>
        <h1>InspoAI</h1>
      </div>
      <div>
        <label>What type of inspiration?</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="blog">Blog</option>
          <option value="social">Social</option>
          <option value="code">Code snippets</option>
          <option value="email">Marketing Email</option>
        </select>
      </div>
      <div>
        <label>💡 Your Prompt</label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your idea or topic here..."
          rows="4"
          className=""
        ></textarea>
      </div>
      <button
        className={`w-full bg-blue-600 text-white ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? "Generating..." : "✨ Generate"}
      </button>
      {output && (
        <div className="mt-6 p-4 bg-white border border-gray-200 rounded shadow-sm">
          <h2 className="font-semibold mb-2">🔎 Output:</h2>
          <pre className="whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </>
  );
}

export default App;
