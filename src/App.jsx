import { useState } from "react";
import "./App.css";
import "./index.css";
import { fetchAIResponse } from "./utils/openai";

function App() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [type, setType] = useState("blog");

  const handleGenerate = async () => {
    setOutput("Generating...");
    const aiResponse = await fetchAIResponse(prompt, type);
    setOutput(aiResponse);
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
        <button onClick={handleGenerate}>Generate</button>
        {output}
      </div>
    </>
  );
}

export default App;
