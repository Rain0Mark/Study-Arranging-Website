import { useNavigate } from 'react-router';
import './TableGrid.css';

type Props = {
  course: {
    name: string;
    location: string;
    lecturer: string;
    color: string;
    id: string;
  };
  chosenGrids: number[];
  setChosenGrids: (grids: number[]) => void;
  index: number;
  editing: boolean;
};

function CurriculumGrid({
  course,
  chosenGrids,
  setChosenGrids,
  index,
  editing,
}: Props) {
  const navigate = useNavigate();
  function chosen() {
    const newChosenGrids = [...chosenGrids];
    if (chosenGrids.includes(index)) {
      newChosenGrids.splice(newChosenGrids.indexOf(index), 1);
    } else {
      newChosenGrids.push(index);
    }
    setChosenGrids(newChosenGrids);
  }

  function showClassDetails() {
    if (course.id) {
      navigate(`/course/${course.id}`);
    }
  }

  return (
    <div
      className={`curriculum-grid ${
        chosenGrids.includes(index) ? 'chosen' : ''
      }`}
      style={course.id ? {} : { backgroundColor: course.color }}
      onClick={editing ? chosen : showClassDetails}
    >
      {chosenGrids.includes(index) && (
        <div className="grid-tooltip">已選取</div>
      )}
      <p className="grid-context name">{course.name}</p>
      <p className="grid-context location">{course.location}</p>
      <p className="grid-context lecturer">{course.lecturer}</p>
    </div>
  );
}

export default CurriculumGrid;
