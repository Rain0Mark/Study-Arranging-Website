import TodoGrid from './TodoGrid';
import { Box, Typography, Grid } from '@mui/material';

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
};

function TodoPage({ todoList, setTodoList }: Props) {
  return (
    <Box sx={{ p: 2 }}>
      {todoList.length === 0 ? (
        <Typography variant="h3" color="white">
          目前沒有待辦事項
        </Typography>
      ) : (
        <Grid container spacing={2} columns={10}>
          {todoList.map((todo) => (
            <Grid key={todo.id} size={2}>
              <TodoGrid
                name={todo.name}
                subject={todo.subject}
                start={todo.start}
                end={todo.end}
                id={todo.id}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default TodoPage;
