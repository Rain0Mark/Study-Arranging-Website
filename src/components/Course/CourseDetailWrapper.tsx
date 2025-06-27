import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import CourseDetail from './CourseDetail';

function CourseDetailWrapper() {
  const [courseList, setCourseList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const saved = localStorage.getItem('courseList');
    if (saved) setCourseList(JSON.parse(saved));
  }, [location]);
  return <CourseDetail courseList={courseList} />;
}

export default CourseDetailWrapper;
