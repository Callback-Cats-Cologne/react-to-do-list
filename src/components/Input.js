import { useState } from "react";
import "./input.css";
import { saveTask } from "./storage";

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

  const taskElements = todos.map((task) => (
    <li key={task} tasks={task}>
      {task} <input type="checkbox" />
    </li>
  ));

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
      <ul>{taskElements}</ul>
    </div>
  );
}
