import { Handle, Position } from "reactflow";
import "../NodeFactory.css";
function NodeFactory({
  title,
  inputs = [],
  outputs = [],
  children,
  customStyle = {},
}) {
  return (
    <div className="base-node" style={customStyle}>
      <div className="node-header">{title}</div>

      {/* Input handles */}
      {inputs.map((input, i) => (
        <Handle
          key={`input-${input}`}
          type="target"
          position={Position.Left}
          id={input}
          style={{ top: 40 + i * 20 }}
        />
      ))}

      {/* Node body */}
      <div className="node-body">{children}</div>

      {/* Output handles */}
      {outputs.map((output, i) => (
        <Handle
          key={`output-${output}`}
          type="source"
          position={Position.Right}
          id={output}
          style={{ top: 40 + i * 20 }}
        />
      ))}
    </div>
  );
}

export default NodeFactory;
