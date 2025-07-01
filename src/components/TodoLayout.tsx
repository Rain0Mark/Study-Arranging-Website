import { useState, useEffect } from "react";
import { Outlet } from "react-router";

export default function TodoLayout() {
  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem('todoList');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <Outlet context={{ todoList, setTodoList }} />
  );
}