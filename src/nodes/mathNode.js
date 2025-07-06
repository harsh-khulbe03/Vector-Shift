import NodeFactory from "./NodeFactory";

function MathNode() {
  return (
    <NodeFactory
      title="Math Node"
      inputs={["a", "b"]}
      outputs={["result"]}
      customStyle={{ backgroundColor: "#dcedc8" }}
    >
      <div>Adds inputs A and B</div>
    </NodeFactory>
  );
}

export default MathNode;
