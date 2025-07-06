export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({ nodeType: type })
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div onDragStart={onDragStart} draggable className="draggable-node">
      {label}
    </div>
  );
};
