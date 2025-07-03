import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';
import TablePage from './components/CourseOverview/Table/TablePage';
import ListPage from './components/CourseOverview/List/ListPage';
import Header from './components/Header';
import EditCoursePage from './components/CourseOverview/CourseEdit';
import TodoEdit from './components/CourseOverview/Todo/TodoEdit';
import TodoPage from './components/CourseOverview/Todo/TodoPage';

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
    color: 'transparent',
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

  useEffect(() => {
    localStorage.setItem('courseList', JSON.stringify(courseList));
  }, [courseList]);

  const [chosenGrids, setChosenGrids] = useState<number[]>([]);

  return (
    <div>
      <Header
        editing={editing}
        setEditing={setEditing}
        setShowing={setShowing}
        setChosenGrids={setChosenGrids}
      />

      {editing === 'course' ? (
        <div>
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
        <TodoEdit
          todoList={todoList}
          setTodoList={setTodoList}
          courseList={courseList}
        />
      ) : null}

      {showing === 'table' ? (
        <TablePage
          courseList={courseList}
          chosenGrids={chosenGrids}
          setChosenGrids={setChosenGrids}
          editing={editing}
        />
      ) : showing === 'list' ? (
        <ListPage courseList={courseList} setCourseList={setCourseList}/>
      ) : showing === 'todo' ? (
        <TodoPage todoList={todoList} setTodoList={setTodoList} />
      ) : null}
    </div>
  );
}

export default CourseOverview;
