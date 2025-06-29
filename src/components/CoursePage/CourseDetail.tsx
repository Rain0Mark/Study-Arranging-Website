import './CourseDetail.css';

type Props = {
  course: {
    name: string;
    location: string;
    lecturer: string;
    color: string;
    inGrids: number[];
    id: string;
  };
};

function CourseDetail({ course } : Props) {
  return (
    <div className="course-detail-container" style={{ background: course.color }}>
      <h2>{course.name}</h2>
      <p>地點：{course.location}</p>
      <p>老師：{course.lecturer}</p>
    </div>
  );
}

export default CourseDetail;