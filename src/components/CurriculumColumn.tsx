import { useState } from 'react';
import CurriculumGrid from './CurriculumGrid';
import './CurriculumColumn.css';

function CurriculumColumn() {
  const [courses, setCourses] = useState<
    { name: string; location: string; lecturer: string }[]
  >([]);

  function newCourse() {
    setCourses((prev) => [
      ...prev,
      { name: 'CS101', location: 'Room A', lecturer: 'Prof. Wang' },
    ]);
  }

  function deleteCourse() {
    const newCourses = [...courses];
    newCourses.pop();
    setCourses(newCourses);
  }

  return (
    <>
      <button onClick={newCourse}>addCourse</button>
      <button onClick={deleteCourse}>deleteCourse</button>
      <div className="curriculum-column">
        {courses.map((course) => {
          return (
            <CurriculumGrid
              name={course.name}
              location={course.location}
              lecturer={course.lecturer}
            />
          );
        })}
      </div>
    </>
  );
}

export default CurriculumColumn;
