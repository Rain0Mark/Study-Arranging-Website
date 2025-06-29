import { useState } from 'react';
import { useParams } from 'react-router';
import './CoursePage.css';
import CourseDetail from './CourseDetail.tsx';
import TodoListPage from './TodoListPage.tsx';
import ProgressPage from './ProgressPage.tsx';

type Props = {
  courseList: {
    name: string;
    location: string;
    lecturer: string;
    color: string;
    inGrids: number[];
    id: string;
  }[];
};

function CoursePage({ courseList }: Props) {
  const { id } = useParams();
  const [showTodo, setShowTodo] = useState(true);
  const course = courseList.find((c) => c.id === id);
  if (!course) return <div style={{ padding: 32 }}>404 Not Found 找不到課程</div>;

  function triggerTodoList() {
    setShowTodo(true);
  }

  function triggerProgress() {
    setShowTodo(false);
  }

  function addTodoList() {
    
  }

  return (
    <div className="course-page">
      <CourseDetail course={course} />
      <div className="show-page-buttons">
          <button onClick={triggerTodoList}>Todo-List</button>
          <button onClick={addTodoList}>Add Todo-List</button>
          <button onClick={triggerProgress}>複習進度</button>
      </div>
      {showTodo ? (<TodoListPage />) : (<ProgressPage />)}
    </div>
  );
}

export default CoursePage;
