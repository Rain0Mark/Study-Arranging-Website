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

function EditCoursePage({
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
    <div>
      <div>
        <input
          placeholder="course name"
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
        onChange={(event) => {
          setNewCourse({
            ...newCourse,
            color: event.target.value,
          });
        }}
        value={newCourse.color}
      />
      <button onClick={addCourse}>
        Add
      </button>
      <button onClick={clearNewCourseInput}>
        Clear
      </button>
      <button onClick={deleteCourse}>
        delete
      </button>
    </div>
  );
}

export default EditCoursePage;
