import TodoGrid from '../../CourseOverview/Todo/TodoGrid';
import { Box, Typography, Grid } from '@mui/material';

type Props = {
  course: {
    name: string;
    location: string;
    lecturer: string;
    color: string;
    inGrids: number[];
    id: string;
  };
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

function CourseTodoPage({ course, todoList, setTodoList }: Props) {
  const todoListInCourse = todoList.filter((todo) => {
    return todo.subject === course.name;
  });

  return (
    <Box sx={{ p: 2 }}>
      {todoListInCourse.length === 0 ? (
        <Typography variant="h3" color="white">
          目前沒有待辦事項
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {todoListInCourse.map((todo) => (
            <Grid key={todo.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
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

export default CourseTodoPage;
