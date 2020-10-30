import { deleteItem } from "../utils/deleteItem";
import "./toDoList.css";

export default function ToDoList({ todos }) {
  const taskElements = todos.map((task) => (
    <li key={task} tasks={task}>
      <input type="checkbox" />
      <span>{task}</span>
      <button className="delete__btn" onClick={() => deleteItem()}>
        💥
      </button>
    </li>
  ));
  return taskElements;
}
