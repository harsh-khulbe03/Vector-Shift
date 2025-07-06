import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />

        {/* ✅ New custom nodes */}
        <DraggableNode type="math" label="Math" />
        <DraggableNode type="logger" label="Logger" />
        <DraggableNode type="time" label="Time" />
        <DraggableNode type="decision" label="Decision" />
        <DraggableNode type="api" label="API Call" />
      </div>
    </div>
  );
};
