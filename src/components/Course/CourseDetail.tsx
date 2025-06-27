import { useParams } from 'react-router';
import './CourseDetail.css';

type Props = {
  courseList: {
    name: string;
    location: string;
    lecturer: string;
    color: string;
    inGrids: number[];
    id: string;
  }[];
};

function CourseDetail({ courseList }: Props) {
  const { id } = useParams();
  const course = courseList.find((c) => c.id === id);

  if (!course) return <div style={{ padding: 32 }}>找不到課程</div>;

  return (
    <div
      className="course-detail-container"
      style={{ background: course.color }}
    >
      <h2>{course.name}</h2>
      <p>地點：{course.location}</p>
      <p>老師：{course.lecturer}</p>
      <p>課程 ID：{course.id}</p>
      <p>格子：{course.inGrids.join(', ')}</p>
    </div>
  );
}

export default CourseDetail;
