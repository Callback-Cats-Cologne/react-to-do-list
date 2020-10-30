import { useState } from "react";
import "./form.css";
import { saveTask } from "./storage";
import ToDoList from "./ToDoList";

export default function Input({ prop }) {
  const [task, setTask] = useState(null);
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const submit = (event) => {
    event.preventDefault();
    saveTask(task);
    setTodos([...todos, task]);
    setTask("");
  };

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

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
      <ToDoList todos={tasks} />
    </div>
  );
}
