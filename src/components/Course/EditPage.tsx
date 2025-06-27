import './EditPage.css';

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

function EditPage({
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
      color: '#ffffff',
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

    const course = {
      ...newCourse,
      inGrids: chosenGrids,
      id: Date.now().toString(),
    };

    const newCourseList = [...courseList, course];
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
    <div className="add-course">
      <div className="input-bar-container">
        <input
          placeholder="course name"
          className="input-bar"
          onChange={(event) => {
            setNewCourse({
              ...newCourse,
              name: event.target.value,
            });
          }}
          value={newCourse.name}
        />
        <input
          placeholder="location"
          className="input-bar"
          onChange={(event) => {
            setNewCourse({
              ...newCourse,
              location: event.target.value,
            });
          }}
          value={newCourse.location}
        />
        <input
          placeholder="lecturer"
          className="input-bar"
          onChange={(event) => {
            setNewCourse({
              ...newCourse,
              lecturer: event.target.value,
            });
          }}
          value={newCourse.lecturer}
        />
      </div>
      <input
        type="color"
        className="input-color"
        onChange={(event) => {
          setNewCourse({
            ...newCourse,
            color: event.target.value,
          });
        }}
        value={newCourse.color}
      />
      <button className="add-button" onClick={addCourse}>
        Add
      </button>
      <button className="clear-button" onClick={clearNewCourseInput}>
        Clear
      </button>
      <button className="delete-button" onClick={deleteCourse}>
        delete
      </button>
    </div>
  );
}

export default EditPage;
