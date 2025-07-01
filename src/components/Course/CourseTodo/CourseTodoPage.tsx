import TodoGrid from '../../CourseOverview/Todo/TodoGrid';

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
    <div>
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
  );
}

export default CourseTodoPage;
