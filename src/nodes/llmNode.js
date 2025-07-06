import NodeFactory from "./NodeFactory";

export const LLMNode = ({ id }) => {
  return (
    <NodeFactory
      title="LLM Node"
      inputs={[`${id}-system`, `${id}-prompt`]}
      outputs={[`${id}-response`]}
      customStyle={{ backgroundColor: "#e1bee7" }}
    >
      <div>This is an LLM.</div>
    </NodeFactory>
  );
};
