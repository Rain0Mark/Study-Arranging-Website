import './TodoPage.css';

type Props = {
  todoList: Array<{
    id: string;
    subject: string;
    name: string;
    start: string;
    end: string;
  }>;
};

function TodoPage({ todoList }: Props) {
  return (
    <div className="todo-page">
      <h1>待辦事項</h1>
      {todoList.length === 0 ? (
        <p>目前沒有待辦事項。</p>
      ) : (
        <div className="todo-list">
          {todoList.map((todo) => (
            <p key={todo.id}>
              <strong>{todo.subject}:</strong> {todo.name} (從 {todo.start} 到 {todo.end})
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoPage;
