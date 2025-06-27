import { useState, useEffect } from 'react';
import TablePage from './components/Course/TablePage';
import ListPage from './components/Course/ListPage';
import Header from './components/Header';
import EditPage from './components/Course/EditPage';

function App() {
  const [editing, setEditing] = useState(false);
  const [showTable, setShowTable] = useState(true);
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
        showTable={showTable}
        setShowTable={setShowTable}
        setChosenGrids={setChosenGrids}
      />
      {editing && (
        <div className="slide-down-panel">
          <EditPage
            newCourse={newCourse}
            setNewCourse={setNewCourse}
            courseList={courseList}
            setCourseList={setCourseList}
            chosenGrids={chosenGrids}
            setChosenGrids={setChosenGrids}
          />
        </div>
      )}
      {showTable ? (
        <TablePage
          courseList={courseList}
          chosenGrids={chosenGrids}
          setChosenGrids={setChosenGrids}
          editing={editing}
        />
      ) : (
        <ListPage courseList={courseList} />
      )}
    </>
  );
}

export default App;
