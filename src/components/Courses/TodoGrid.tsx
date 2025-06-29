import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import RingCountdown from './RingCountdown';
import { getLeftTime } from '../../utils.tsx/date';
import './TodoGrid.css';

type Props = {
  name: string;
  subject: string;
  start: string;
  end: string;
};

function TodoGrid({ start, end, name, subject }: Props) {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const id = setInterval(() => setNow(dayjs()), 1000);
    return () => clearInterval(id);
  }, []);

  const total = dayjs(end).diff(dayjs(start));
  const left = dayjs(end).diff(now);
  const percent = Math.max(0, Math.min(100, (left / total) * 100));
  return (
    <RingCountdown percent={parseFloat(percent.toFixed(1))}>
      <div>
        <div className="todo-name">{name}</div>
        <div className="todo-subject">{subject}</div>
        <div className="todo-left">{getLeftTime(left)}</div>
      </div>
    </RingCountdown>
  );
}

export default TodoGrid;
