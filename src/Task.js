export const Task = props => {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.complete ? "green" : "white" }}
    >
      <h1>{props.taskName}</h1>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
      <button onClick={() => props.removeTask(props.id)}>x</button>
    </div>
  );
};
