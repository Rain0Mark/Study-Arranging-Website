import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { TextField, Button, Stack } from '@mui/material';
import {
  getTodayDateLocal,
  getTomorrowEndOfDayLocal,
} from '../../../utils/date';

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
  courseName: string;
};

function TodoEdit({ todoList, setTodoList, courseName }: Props) {
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

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Enter') {
        e.preventDefault();
        addNewTodo();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <Stack spacing={2} sx={{ p: 2, color: 'white' }}>
      <TextField
        fullWidth
        label="名稱"
        variant="outlined"
        value={newTodo.name}
        onChange={(event) =>
          setNewTodo({ ...newTodo, name: event.target.value })
        }
        InputLabelProps={{ style: { color: 'white' } }}
        sx={{
          input: { color: 'white' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
          },
        }}
      />

      <TextField
        fullWidth
        label="結束時間"
        type="datetime-local"
        InputLabelProps={{ shrink: true, style: { color: 'white' } }}
        value={newTodo.end}
        onChange={(event) =>
          setNewTodo({ ...newTodo, end: event.target.value })
        }
        sx={{
          input: { color: 'white' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
          },
        }}
      />

      <Button variant="contained" color="primary" onClick={addNewTodo}>
        新增待辦事項
      </Button>
    </Stack>
  );
}

export default TodoEdit;
