import { useNavigate } from 'react-router';

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

function ListPage({ courseList }: Props) {
  const navigate = useNavigate();
  return (
    <div>
      {courseList.map((course, index) => {
        return (
          <div key={index}>
            <div
              key={index}
              onClick={() => course.id && navigate(`/course/${course.id}`)}
            >
              <p>{course.name}</p>
              <p>{course.location}</p>
              <p>{course.lecturer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListPage;
