import React from "react";
import UseStorage from "./UseStorage";
import './App.css'

const App = () => {
  const [text, setText] = UseStorage("text", "");
  return (
    <div>
      <h2>Enter the text below</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default App;