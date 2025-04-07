import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [type, setType] = useState("blog");

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
    </>
  );
}

export default App;
