import { useState } from 'react';
import './CurriculumGrid.css';

function CurriculumGrid(newCourseInfo: {
  newName: string;
  newLocation: string;
  newLecturer: string;
}) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [lecturer, setLecturer] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  function addNewCourse() {
    setName(newCourseInfo.newName);
    setLocation(newCourseInfo.newLocation);
    setLecturer(newCourseInfo.newLecturer);
    if (
      !newCourseInfo.newName &&
      !newCourseInfo.newLocation &&
      !newCourseInfo.newLecturer
    )
      setIsEmpty(true);
    else setIsEmpty(false);
  }

  return (
    <div
      className={
        isEmpty ? 'curriculum-grid' : 'curriculum-grid curriculum-grid-filled'
      }
      onClick={addNewCourse}
    >
      <p className="grid-context name">{name}</p>
      <p className="grid-context location">{location}</p>
      <p className="grid-context lecturer">{lecturer}</p>
    </div>
  );
}

export default CurriculumGrid;
