import { useStore } from "./store";
import { shallow } from "zustand/shallow";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    const payload = { nodes, edges };

    try {
      const response = await fetch(
        "https://vector-shift-backend-29el.onrender.com/validate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        alert("✅ Success: " + data.message);
      } else {
        alert("❌ Error: " + data.message);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("❌ Network or server error. See console for details.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          borderRadius: "6px",
          fontWeight: "500",
          cursor: "pointer",
          border: "none",
        }}
      >
        🚀 Submit
      </button>
    </div>
  );
};
