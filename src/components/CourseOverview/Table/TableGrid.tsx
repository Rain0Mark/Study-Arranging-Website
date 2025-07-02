import { useNavigate } from 'react-router';
import { Box } from '@mui/material';

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

  const isSelected = chosenGrids.includes(index);
  const handleClick = editing === 'course' ? chosen : showClassDetails;

  const isEmpty = !course.id;

  return (
    <Box
      onClick={handleClick}
      sx={{
        height: '100%',
        width: '100%',
        backgroundColor: isEmpty ? 'transparent' : course.color,
        p: 1,
        boxSizing: 'border-box',
        cursor: course.id || editing === 'course' ? 'pointer' : 'default',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: isSelected ? '3px solid white' : 'none',
        opacity: isEmpty && !isSelected ? 0 : 1,
        color: 'white',
      }}
    >
      {isSelected && <Box sx={{ fontSize: 12, color: 'white' }}>已選取</Box>}
      {!isEmpty && (
        <>
          <Box sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: 22 }}>
            {course.name}
          </Box>
          <Box sx={{ fontSize: 12 }}>{course.location}</Box>
          <Box sx={{ fontSize: 12 }}>{course.lecturer}</Box>
        </>
      )}
    </Box>
  );
}

export default CurriculumGrid;