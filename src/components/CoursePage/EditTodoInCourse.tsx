import { useState } from 'react';
import dayjs from 'dayjs';
import {
  getTomorrowEndOfDayLocal,
  getTodayDateLocal,
} from '../../utils.tsx/date';

type Props = {
  courseName: string;
  todoList: {
    id: string;
    subject: string;
    name: string;
    start: string;
    end: string;
  }[];
  setTodoList: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        subject: string;
        name: string;
        start: string;
        end: string;
      }[]
    >
  >;
};

function EditTodoInCourse({ courseName, todoList, setTodoList }: Props) {
  const [newTodo, setNewTodo] = useState({
    subject: courseName,
    name: '',
    start: '',
    end: getTomorrowEndOfDayLocal(),
  });

  function addNewTodo() {
    if (!newTodo.name) {
      alert('請輸入待辦事項名稱');
      return;
    }
    const newTodoItem = {
      id: crypto.randomUUID(),
      subject: newTodo.subject,
      name: newTodo.name,
      start: getTodayDateLocal(),
      end: newTodo.end,
    };
    const newTodoList = [...todoList, newTodoItem].sort((a, b) => {
      const isABeforeB = dayjs(a.end).isBefore(dayjs(b.end));
      return isABeforeB ? -1 : 1;
    });
    setTodoList(newTodoList);

    setNewTodo({
      subject: newTodo.subject,
      name: '',
      start: '',
      end: getTomorrowEndOfDayLocal(),
    });
  }
  return (
    <div>
      <input
        placeholder="輸入名稱"
        onChange={(event) => {
          setNewTodo({ ...newTodo, name: event.target.value });
        }}
        value={newTodo.name}
      />
      <input
        type="datetime-local"
        placeholder="結束時間"
        value={newTodo.end}
        onChange={(event) => {
          setNewTodo({ ...newTodo, end: event.target.value });
        }}
      />
      <button onClick={addNewTodo}>新增待辦事項</button>
    </div>
  );
}

export default EditTodoInCourse;
