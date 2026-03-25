export function TaskList({ items, onDelete, onToggle }) {
  return (
    <div className="list">
      <h1 className="stitle more">Task List</h1>

      {items.map((task, index) => (
        <div key={index} className="items">
          <h2
            className="item"
            style={{ color: task.completed ? "green" : "blue" }}
          >
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
      ))}
    </div>
  );
}
