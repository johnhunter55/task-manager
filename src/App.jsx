import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TaskInput } from "./components/TaskInput";
import { Stats } from "./components/Stats";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const doneornot = (index) => {
    setTasks(
      tasks.map((task, i) => {
        if (i === index) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="left-container">
          <TaskInput onAdd={addTask} />
          <Stats completedTasks={completedTasks} totalTasks={totalTasks} />
        </div>
        <TaskList items={tasks} onDelete={handleDelete} onToggle={doneornot} />
      </div>
    </>
  );
}

export default App;
