import { useNavigate } from 'react-router';
import './ListPage.css';

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
    <div className="list-page-container">
      {courseList.map((course, index) => {
        return (
          <div key={index} className="list-item-container">
            <div
              className="list-item"
              key={index}
              style={{ backgroundColor: course.color, cursor: 'pointer' }}
              onClick={() => course.id && navigate(`/${course.id}`)}
            >
              <p className="list-item-name">{course.name}</p>
              <p className="list-item-location">{course.location}</p>
              <p className="list-item-lecturer">{course.lecturer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListPage;
