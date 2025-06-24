import { useState } from 'react';
import './CurriculumGrid.css';

type Props = {
  newName: string;
  newLocation: string;
  newLecturer: string;
  newColor: string;
};

function CurriculumGrid(newCourseInfo: Props) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [lecturer, setLecturer] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('');

  function addNewCourse() {
    setName(newCourseInfo.newName);
    setLocation(newCourseInfo.newLocation);
    setLecturer(newCourseInfo.newLecturer);
    setBackgroundColor(newCourseInfo.newColor);
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
      className='curriculum-grid'
      style={ isEmpty? {}:{backgroundColor}}
      onClick={addNewCourse}
    >
      <p className="grid-context name">{name}</p>
      <p className="grid-context location">{location}</p>
      <p className="grid-context lecturer">{lecturer}</p>
    </div>
  );
}

export default CurriculumGrid;
