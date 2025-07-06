import NodeFactory from "./NodeFactory";

function TimeNode() {
  return (
    <NodeFactory
      title="Time Node"
      outputs={["timestamp"]}
      customStyle={{ backgroundColor: "#b3e5fc" }}
    >
      <div>Emits current timestamp</div>
    </NodeFactory>
  );
}

export default TimeNode;
