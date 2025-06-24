import { useEffect, useState } from 'react';
import './CurriculumGrid.css';

type Props = {
  newName: string;
  newLocation: string;
  newLecturer: string;
  newColor: string;
  gridKey: number;
  editing: boolean;
};

function CurriculumGrid(newCourseInfo: Props) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [lecturer, setLecturer] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    const key = `courseInfo_${newCourseInfo.gridKey}`;
    const stored = localStorage.getItem(key);
    if (stored) {
      const course = JSON.parse(stored);
      setName(course.name || '');
      setLocation(course.location || '');
      setLecturer(course.lecturer || '');
      setBackgroundColor(course.color || '');
      setIsEmpty(!(course.name || course.location || course.lecturer));
    }
  }, [newCourseInfo.gridKey]);

  function addNewCourse() {
    setName(newCourseInfo.newName);
    setLocation(newCourseInfo.newLocation);
    setLecturer(newCourseInfo.newLecturer);
    setBackgroundColor(newCourseInfo.newColor);

    const key = `courseInfo_${newCourseInfo.gridKey}`;
    const courseInfo = {
      name: newCourseInfo.newName,
      location: newCourseInfo.newLocation,
      lecturer: newCourseInfo.newLecturer,
      color: newCourseInfo.newColor,
    };
    localStorage.setItem(key, JSON.stringify(courseInfo));
    if (
      !newCourseInfo.newName &&
      !newCourseInfo.newLocation &&
      !newCourseInfo.newLecturer
    )
      setIsEmpty(true);
    else setIsEmpty(false);
  }

  function showClassDetails() {
    console.log('Show Class Details');
  }

  function handleClick() {
    if (newCourseInfo.editing)
      addNewCourse();
    else 
      showClassDetails();
  }

  return (
    <div
      className="curriculum-grid"
      style={isEmpty ? {} : { backgroundColor }}
      onClick={handleClick}
    >
      <p className="grid-context name">{name}</p>
      <p className="grid-context location">{location}</p>
      <p className="grid-context lecturer">{lecturer}</p>
    </div>
  );
}

export default CurriculumGrid;
