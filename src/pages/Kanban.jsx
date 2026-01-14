import { Header } from "../components";
import { useState } from "react";
import KanbanCard from "./Charts/KanbanCard";

const Kanban = ({ kanbanData, kanbanGrid }) => {
  const [columns] = useState(kanbanGrid);
  const [tasks, setTasks] = useState(kanbanData);
  const [draggedTask, setDraggedTask] = useState(null);
  const [collapsedColumns, setCollapsedColumns] = useState({});

  const handleDrop = (newStatus) => {
    if (!draggedTask) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.Id === draggedTask.Id ? { ...task, Status: newStatus } : task
      )
    );

    setDraggedTask(null);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category={"App"} title={"Kanban"} />

      <div className="flex gap-6 overflow-x-auto">
        {columns.map((column) => (
          <div
            key={column.keyField}
            onDragOver={(e) => {
              e.preventDefault();
              e.currentTarget.classList.add("ring-2", "ring-indigo-400");
            }}
            onDragLeave={(e) => {
              e.currentTarget.classList.remove("ring-2", "ring-indigo-400");
            }}
            onDrop={(e) => {
              e.currentTarget.classList.remove("ring-2", "ring-indigo-400");
              handleDrop(column.keyField);
            }}
            className={`
                        bg-gray-100 rounded-xl p-4 flex-shrink-0 transition-all duration-300
                        ${collapsedColumns[column.keyField] ? "w-16" : "w-72"}
                      `}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              {!collapsedColumns[column.keyField] && (
                <h2 className="font-bold text-sm">{column.headerText}</h2>
              )}

              {column.allowToggle && (
                <button
                  onClick={() =>
                    setCollapsedColumns((prev) => ({
                      ...prev,
                      [column.keyField]: !prev[column.keyField],
                    }))
                  }
                  className="text-xs text-gray-500 hover:text-black ml-auto"
                >
                  {collapsedColumns[column.keyField] ? "▶" : "▼"}
                </button>
              )}
            </div>

            {/* Tasks */}
            {collapsedColumns[column.keyField] ? (
              <div className="flex flex-col items-center justify-center h-full gap-4">
                <span className="text-xs font-semibold rotate-90 whitespace-nowrap mb-8">
                  {column.headerText}
                  {" : "}
                </span>

                <span className="text-xs text-gray-500 rotate-90 whitespace-nowrap">
                  {
                    tasks.filter((task) => task.Status === column.keyField)
                      .length
                  }{" "}
                  Tasks
                </span>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {tasks
                  .filter((task) => task.Status === column.keyField)
                  .map((task) => (
                    <KanbanCard
                      key={task.Id}
                      task={task}
                      onDragStart={(task) => setDraggedTask(task)}
                    />
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;
