import { useState } from "react";
import "./input.css";
import { saveTask } from "./storage";

export default function Input() {
  const [task, setTask] = useState(null);
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  //   const tasksresponse = saveTask(tasks);
  const submit = (event) => {
    event.preventDefault();
    // setTasks(event.target.tasks);
    saveTask(task);
    setTodos([...todos, task]);
    setTask("");
  };

  //   const todo = "";

  return (
    <div>
      <form className="form" onSubmit={submit}>
        <input
          onChange={(event) => {
            setTask(event.target.value);
          }}
          className="inputField"
          value={task}
          type="text"
          placeholder="Add ToDo"
        />
        <button>🐮</button>
      </form>
      <p>{todos}</p>
    </div>
  );
}
