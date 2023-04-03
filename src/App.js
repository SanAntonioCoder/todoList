// import React from "react";
import { useState } from "react";
import "./App.css";
import { Task } from "./Task";

function App() {
  const [todoList, settodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = event => {
    setNewTask(event.target.value);
  };
  // practice
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };

    settodoList([...todoList, task]);
  };
  // practice
  const removeTask = id => {
    const newTodoList = todoList.filter(task => task.id !== id);
    settodoList(newTodoList);
  };
  // practice
  const completeTask = id => {
    settodoList(
      todoList.map(task => {
        if (task.id === id) {
          return { ...task, complete: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Tasks</button>
      </div>
      <div className="list">
        {todoList.map(task => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              removeTask={removeTask}
              complete={task.complete}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
