import { useState } from "react";
import ReactMarkdown from "react-markdown";
// import remarkPresetWooorm from "remark-preset-wooorm";

function App() {
  const [markdown, setMarkdown] = useState();

  function inputHandler(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="grid min-h-screen grid-cols-2 sm:flex-row">
      <textarea
        className="p-10 font-mono text-lg text-gray-600 shadow-md outline-none"
        onChange={inputHandler}
      />
      <div className="px-10 text-gray-800 bg-gray-50 py-14">
        <ReactMarkdown children={markdown} />
      </div>
    </div>
  );
}

export default App;
