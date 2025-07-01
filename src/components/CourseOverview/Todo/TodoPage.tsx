import TodoGrid from './TodoGrid';

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
    <div>
      <h1>待辦事項</h1>
      {todoList.length === 0 ? (
        <p>目前沒有待辦事項。</p>
      ) : (
        <div>
          {todoList.map((todo) => {
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
      )}
    </div>
  );
}

export default TodoPage;
