const KanbanCard = ({ task, onDragStart }) => {
  return (
    <div
      draggable
      onDragStart={() => onDragStart(task)}
      className="bg-white rounded-lg p-3 shadow border-l-4 cursor-grab active:cursor-grabbing"
      style={{ borderColor: task.Color }}
    >
      <h3 className="font-semibold text-sm mb-1">{task.Title}</h3>

      <p className="text-xs text-gray-600 mb-2">{task.Summary}</p>

      <div className="flex justify-between text-xs text-gray-500">
        <span>{task.Assignee}</span>
        <span>{task.Estimate}h</span>
      </div>
    </div>
  );
};

export default KanbanCard;
