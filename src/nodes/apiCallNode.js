import NodeFactory from "./NodeFactory";

function ApiCallNode() {
  return (
    <NodeFactory
      title="API Call Node"
      inputs={["trigger"]}
      outputs={["response"]}
      customStyle={{ backgroundColor: "#c8e6c9" }}
    >
      <div>Simulates an API call</div>
    </NodeFactory>
  );
}

export default ApiCallNode;
