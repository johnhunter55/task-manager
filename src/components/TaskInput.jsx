import { useState } from "react";

export function TaskInput({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <>
      <div className="task-input">
        <h1 className="stitle">Add a task</h1>
        <form className="input-container" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="type anything"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
}
