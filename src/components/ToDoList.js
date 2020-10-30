import "./toDoList.css";

export default function ToDoList({ todos }) {
  const taskElements = todos.map((task) => (
    <li key={task} tasks={task}>
      <input type="checkbox" />
      <span contentEditable="true" className="editable">
        {task}
      </span>
      <button className="delete__btn">💥</button>
    </li>
  ));
  return taskElements;
}
