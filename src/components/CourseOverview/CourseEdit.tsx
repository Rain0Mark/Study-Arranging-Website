import { TextField, Button, Stack, InputLabel, Box } from '@mui/material';

type Props = {
  newCourse: {
    name: string;
    location: string;
    lecturer: string;
    color: string;
  };
  setNewCourse: (course: {
    name: string;
    location: string;
    lecturer: string;
    color: string;
  }) => void;
  courseList: Array<{
    name: string;
    location: string;
    lecturer: string;
    color: string;
    inGrids: number[];
    id: string;
  }>;
  setCourseList: (
    courses: Array<{
      name: string;
      location: string;
      lecturer: string;
      color: string;
      inGrids: number[];
      id: string;
    }>
  ) => void;
  chosenGrids: number[];
  setChosenGrids: (grids: number[]) => void;
};

function CourseEdit({
  newCourse,
  setNewCourse,
  courseList,
  setCourseList,
  chosenGrids,
  setChosenGrids,
}: Props) {
  function clearNewCourseInput() {
    setNewCourse({
      name: '',
      location: '',
      lecturer: '',
      color: 'transparent',
    });
  }

  function addCourse() {
    if (
      newCourse.name.trim() === '' ||
      newCourse.location.trim() === '' ||
      newCourse.lecturer.trim() === ''
    ) {
      alert('Please fill in all fields');
      return;
    }
    if (chosenGrids.length === 0) {
      alert('Please select a grid to add the course');
      return;
    }

    const newDeletedCourseList = courseList.filter((course) => {
      return !chosenGrids.some((grid) => course.inGrids.includes(grid));
    });

    const course = {
      ...newCourse,
      inGrids: chosenGrids,
      id: crypto.randomUUID(),
    };

    const newCourseList = [...newDeletedCourseList, course];
    setCourseList(newCourseList);

    clearNewCourseInput();
    setChosenGrids([]);
  }

  function deleteCourse() {
    if (chosenGrids.length === 0) {
      alert('Please select a grid to delete the course');
      return;
    }
    const newCourseList = courseList.filter((course) => {
      return !chosenGrids.some((grid) => course.inGrids.includes(grid));
    });
    setCourseList(newCourseList);
    setChosenGrids([]);
  }

  return (
    <Stack spacing={2} sx={{ p: 2, color: 'white' }}>
      <TextField
        fullWidth
        label="課程名稱"
        variant="outlined"
        value={newCourse.name}
        onChange={(event) => {
          setNewCourse({ ...newCourse, name: event.target.value });
        }}
        InputLabelProps={{ style: { color: 'white' } }}
        sx={{
          input: { color: 'white' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
          },
        }}
      />

      <TextField
        fullWidth
        label="課程地點"
        variant="outlined"
        value={newCourse.location}
        onChange={(event) => {
          setNewCourse({ ...newCourse, location: event.target.value });
        }}
        InputLabelProps={{ style: { color: 'white' } }}
        sx={{
          input: { color: 'white' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
          },
        }}
      />

      <TextField
        fullWidth
        label="授課老師"
        variant="outlined"
        value={newCourse.lecturer}
        onChange={(event) => {
          setNewCourse({ ...newCourse, lecturer: event.target.value });
        }}
        InputLabelProps={{ style: { color: 'white' } }}
        sx={{
          input: { color: 'white' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
          },
        }}
      />

      <div>
        <InputLabel sx={{ color: 'white', mb: 1 }}>背景顏色</InputLabel>
        <input
          type="color"
          value={newCourse.color}
          onChange={(event) => {
            setNewCourse({ ...newCourse, color: event.target.value });
          }}
        />
      </div>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mr: 1 }}
          onClick={addCourse}
        >
          Add
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{ mx: 1 }}
          onClick={clearNewCourseInput}
        >
          Clear
        </Button>
        <Button
          variant="outlined"
          color="error"
          fullWidth
          sx={{ ml: 1 }}
          onClick={deleteCourse}
        >
          Delete
        </Button>
      </Box>
    </Stack>
  );
}

export default CourseEdit;
