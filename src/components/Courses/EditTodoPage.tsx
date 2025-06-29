import './EditTodoPage.css';
import { useState } from 'react';
import { getTodayDateLocal, getTomorrowEndOfDayLocal } from '../../utils/date';

type Props = {
  todoList: Array<{
    id: string;
    subject: string;
    name: string;
    start: string;
    end: string;
  }>;
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
  courseList: Array<{
    name: string;
    location: string;
    lecturer: string;
    color: string;
    inGrids: number[];
    id: string;
  }>;
};

function EditTodoPage({ todoList, setTodoList, courseList }: Props) {
  const [newTodo, setNewTodo] = useState({
    subject: '',
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
    setTodoList([...todoList, newTodoItem]);

    setNewTodo({
      subject: newTodo.subject,
      name: '',
      start: '',
      end: getTomorrowEndOfDayLocal(),
    });
  }

  return (
    <>
      <input
        placeholder="輸入名稱"
        onChange={(event) => {
          setNewTodo({ ...newTodo, name: event.target.value });
        }}
        value={newTodo.name}
      />
      <select
        value={newTodo.subject}
        onChange={(event) => {
          setNewTodo({ ...newTodo, subject: event.target.value });
        }}
      >
        {courseList.map((course) => (
          <option key={course.id} value={course.name}>
            {course.name}
          </option>
        ))}
      </select>
      <input
        type="datetime-local"
        placeholder="結束時間"
        value={newTodo.end}
        onChange={(event) => {
          setNewTodo({ ...newTodo, end: event.target.value });
        }}
      />
      <button onClick={addNewTodo}>新增待辦事項</button>
    </>
  );
}

export default EditTodoPage;
