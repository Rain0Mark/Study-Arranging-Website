import TodoGrid from './TodoGrid';
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
      <h1 className="heading">待辦事項</h1>
      {todoList.length === 0 ? (
        <p>目前沒有待辦事項。</p>
      ) : (
        <div className="todo-list">
          {todoList.map((todo) => {
            return (
              <div key={todo.id} className="todo-item">
                <TodoGrid
                  name={todo.name}
                  subject={todo.subject}
                  start={todo.start}
                  end={todo.end}
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
