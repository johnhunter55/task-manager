import { TaskItem } from "./TaskItem";

export function TaskList({ items, onDelete, onToggle }) {
  return (
    <div className="list">
      <h1 className="stitle more">Task List</h1>

      {items.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
