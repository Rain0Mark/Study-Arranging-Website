import { useState, useEffect } from 'react';
import { useLocation, useOutletContext } from 'react-router';
import CoursePage from './CoursePage';

function CoursePageWrapper() {
  const { todoList, setTodoList } = useOutletContext<{
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
  }>();
  const [courseList, setCourseList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const saved = localStorage.getItem('courseList');
    if (saved) setCourseList(JSON.parse(saved));
  }, [location]);
  return <CoursePage courseList={courseList} todoList={todoList} setTodoList={setTodoList} />;
}

export default CoursePageWrapper;
