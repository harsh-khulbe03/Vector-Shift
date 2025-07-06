import NodeFactory from "./NodeFactory";

function DecisionNode() {
  return (
    <NodeFactory
      title="Decision Node"
      inputs={['condition']}
      outputs={['true', 'false']}
      customStyle={{ backgroundColor: '#d7ccc8' }}
    >
      <div>Branches based on condition</div>
    </NodeFactory>
  );
}

export default DecisionNode;