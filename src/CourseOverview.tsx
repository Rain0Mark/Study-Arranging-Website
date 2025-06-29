import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';
import TablePage from './components/Courses/TablePage';
import ListPage from './components/Courses/ListPage';
import Header from './components/Header';
import EditCoursePage from './components/Courses/EditCoursePage';
import EditTodoPage from './components/Courses/EditTodoPage';
import TodoPage from './components/Courses/TodoPage';

function CourseOverview() {
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
  const [showing, setShowing] = useState('table');
  const [editing, setEditing] = useState('none');
  const [newCourse, setNewCourse] = useState({
    name: '',
    location: '',
    lecturer: '',
    color: '#ffffff',
  });
  const [courseList, setCourseList] = useState<
    {
      name: string;
      location: string;
      lecturer: string;
      color: string;
      inGrids: number[];
      id: string;
    }[]
  >(() => {
    const saved = localStorage.getItem('courseList');
    return saved ? JSON.parse(saved) : [];
  });
  const [chosenGrids, setChosenGrids] = useState<number[]>([]);

  useEffect(() => {
    localStorage.setItem('courseList', JSON.stringify(courseList));
  }, [courseList]);

  return (
    <>
      <Header
        editing={editing}
        setEditing={setEditing}
        setShowing={setShowing}
        setChosenGrids={setChosenGrids}
      />

      {editing === 'course' ? (
        <div className="slide-down-panel">
          <EditCoursePage
            newCourse={newCourse}
            setNewCourse={setNewCourse}
            courseList={courseList}
            setCourseList={setCourseList}
            chosenGrids={chosenGrids}
            setChosenGrids={setChosenGrids}
          />
        </div>
      ) : editing === 'todo' ? (
        <EditTodoPage todoList={todoList} setTodoList={setTodoList} courseList={courseList}/>
      ) : null}

      {showing === 'table' ? (
        <TablePage
          courseList={courseList}
          chosenGrids={chosenGrids}
          setChosenGrids={setChosenGrids}
          editing={editing}
        />
      ) : showing === 'list' ? (
        <ListPage courseList={courseList} />
      ) : showing === 'todo' ? (
        <TodoPage todoList={todoList} />
      ) : null}
    </>
  );
}

export default CourseOverview;
