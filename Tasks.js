import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState([]);
  const addTask = (taskAdded) => {
    let currentTask = [];
    currentTask = task;
    currentTask.push({
      id: new Date(),
      description: taskAdded,
      isCompleted: false
    });
    setTask(currentTask);
  };

  const toggleComplete = (e, currentTask) => {
    let updatedTask = [];
    task.forEach((curr) => {
      if (curr.id === currentTask.id) {
        currentTask.isCompleted = e.target.checked;
        updatedTask.push(currentTask);
      } else {
        updatedTask.push(curr);
      }
    });
    setTask(updatedTask);
  };

  const editTask = (currentTask) => {
    let editTaskPrompt = prompt("Edit Task", currentTask.description);
    if (editTaskPrompt !== null) {
      let updatedTask = [];
      task.forEach((curr) => {
        if (curr.id === currentTask.id) {
          currentTask.description = editTaskPrompt;
          updatedTask.push(currentTask);
        } else {
          updatedTask.push(curr);
        }
      });
      setTask(updatedTask);
    }
  };

  const deleteTask = (currentTask) => {
    console.log("current task", currentTask);
    const updatedTask = [];
    task.forEach((curr) => {
      if (curr.id !== currentTask.id) {
        updatedTask.push(curr);
      }
    });
    setTask(updatedTask);
  };

  console.log("task", task);
  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask(e.target.elements.tasks.value);
        }}
      >
        <input id="tasks" type="text" placeholder="Enter your task" />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {task.map((currentTask) => (
          <>
            <input
              type="checkbox"
              onChange={(e) => toggleComplete(e, currentTask)}
            />
            <li key={currentTask.id}>{currentTask.description}</li>
            <button onClick={() => editTask(currentTask)}>Edit</button>
            <button onClick={() => deleteTask(currentTask)}>Delete</button>
          </>
        ))}
      </ul>
    </div>
  );
}
