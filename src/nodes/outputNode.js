import { useState } from "react";
import NodeFactory from "./NodeFactory";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);

  return (
    <NodeFactory
      title="Output Node"
      inputs={[`${id}-value`]}
      customStyle={{ backgroundColor: "#ffe0b2" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label>
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            style={{ width: "100%" }}
          />
        </label>
        <label>
          Type:
          <select
            value={outputType}
            onChange={handleTypeChange}
            style={{ width: "100%" }}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </NodeFactory>
  );
};
