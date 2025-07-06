import { useState } from "react";
import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        <PipelineToolbar />
        <button
          onClick={toggleTheme}
          style={{
            padding: "8px 16px",
            backgroundColor: darkMode ? "#f3f4f6" : "#1f2937",
            color: darkMode ? "#1f2937" : "#f9fafb",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
