export function TaskItem({ task, index, onDelete, onToggle }) {
  return (
    <div className="items">
      <h2 className="item" style={{ color: task.completed ? "green" : "blue" }}>
        {task.text}
      </h2>
      <div>
        <span
          className="material-icons-outlined not-red"
          onClick={() => onToggle(index)}
        >
          {task.completed ? "check_box" : "circle"}
        </span>
        <span
          className="material-icons-outlined red"
          onClick={() => onDelete(index)}
        >
          delete
        </span>
      </div>
    </div>
  );
}
