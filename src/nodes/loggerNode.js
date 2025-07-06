import NodeFactory from "./NodeFactory";

function LoggerNode() {
  return (
    <NodeFactory
      title="Logger Node"
      inputs={["log"]}
      customStyle={{ backgroundColor: "#fce4ec" }}
    >
      <div>Logs value to console</div>
    </NodeFactory>
  );
}

export default LoggerNode;
