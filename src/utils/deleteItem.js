import React from "react";
import { without } from "./delArrItem";

export function deleteItem(todos) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = without(tasks, todos);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
