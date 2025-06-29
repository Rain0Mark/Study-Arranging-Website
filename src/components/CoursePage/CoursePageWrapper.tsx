import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import CoursePage from './CoursePage';

function CoursePageWrapper() {
  const [courseList, setCourseList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const saved = localStorage.getItem('courseList');
    if (saved) setCourseList(JSON.parse(saved));
  }, [location]);
  return <CoursePage courseList={courseList} />;
}

export default CoursePageWrapper;
