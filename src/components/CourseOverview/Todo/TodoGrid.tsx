import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import TodoRingCountdown from './TodoRingCountdown';
import { getLeftTime } from '../../../utils/date';
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
    <TodoRingCountdown percent={parseFloat(percent.toFixed(1))}>
      <div>
        <button onClick={deleteTodo}>
          <ImCancelCircle />
        </button>
        <div>{name}</div>
        <div>{subject}</div>
        <div>{getLeftTime(left)}</div>
      </div>
    </TodoRingCountdown>
  );
}

export default TodoGrid;
