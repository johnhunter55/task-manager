export function Stats({ completedTasks, totalTasks }) {
  return (
    <>
      <div className="stats-box">
        <h1 className="stitle">Task Stats</h1>
        <h2 className="stats">
          {completedTasks} / {totalTasks}
        </h2>
      </div>
    </>
  );
}
