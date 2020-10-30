export function saveTask(todo) {
  let task = null;

  try {
    task = JSON.parse(localStorage.getItem("tasks")) || [];
  } catch (error) {
    console.error(error);
    task = [];
  }
  if (task.includes(todo)) {
    return;
  }
  const newTask = [...task, todo];
  localStorage.setItem("tasks", JSON.stringify(newTask));
  return newTask;
}
