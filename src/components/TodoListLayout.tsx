import { useState } from "react";
import { Outlet } from "react-router";


export default function TodoLayout() {
  const [todoList, setTodoList] = useState([]);

  return (
    <Outlet context={{ todoList, setTodoList }} />
  );
}