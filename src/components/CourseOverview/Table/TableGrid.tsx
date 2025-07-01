import { useNavigate } from 'react-router';

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
  editing: string;
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
    <div onClick={editing === 'course' ? chosen : showClassDetails}>
      {chosenGrids.includes(index) && <div>已選取</div>}
      <p>{course.name}</p>
      <p>{course.location}</p>
      <p>{course.lecturer}</p>
    </div>
  );
}

export default CurriculumGrid;
