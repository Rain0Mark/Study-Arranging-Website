import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import RingCountdown from './TodoRingCountdown';
import { getLeftTime } from '../../../utils/date';
import './TodoGrid.css';
import { ImCancelCircle } from 'react-icons/im';

type Props = {
  name: string;
  subject: string;
  start: string;
  end: string;
  id: string;
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
};

function TodoGrid({
  start,
  end,
  name,
  subject,
  id,
  todoList,
  setTodoList,
}: Props) {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const id = setInterval(() => setNow(dayjs()), 1000);
    return () => clearInterval(id);
  }, []);

  function deleteTodo() {
    console.log('clicked');
    const newTodoList = todoList.filter((todo) => {
      return !(todo.id === id);
    });

    setTodoList(newTodoList);
    return;
  }

  const total = dayjs(end).diff(dayjs(start));
  const left = dayjs(end).diff(now);
  const percent = Math.max(0, Math.min(100, (left / total) * 100));
  return (
    <RingCountdown percent={parseFloat(percent.toFixed(1))}>
      <div className="todo-grid-container">
        <button className="todo-delete-button" onClick={deleteTodo}>
          <ImCancelCircle />
        </button>
        <div className="todo-name">{name}</div>
        <div className="todo-subject">{subject}</div>
        <div className="todo-left">{getLeftTime(left)}</div>
      </div>
    </RingCountdown>
  );
}

export default TodoGrid;
