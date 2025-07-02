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
        <Grid container spacing={2} columns={10}>
          {todoListInCourse.map((todo) => (
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

export default CourseTodoPage;

/*    <div>
      {todoListInCourse.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoGrid
              name={todo.name}
              subject={todo.subject}
              start={todo.start}
              end={todo.end}
              id={todo.id}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          </div>
        );
      })}
    </div>
  );*/
