import './AddCourse.css';

type Props = {
  newName: string;
  setNewName: (newValue: string) => void;
  newLocation: string;
  setNewLocation: (newValue: string) => void;
  newLecturer: string;
  setNewLecturer: (newValue: string) => void;
  setNewColor: (newValue: string) => void;
};

function AddCourse({
  newName,
  setNewName,
  newLocation,
  setNewLocation,
  newLecturer,
  setNewLecturer,
  setNewColor,
}: Props) {
  function clearNewCourseInput() {
    setNewName('');
    setNewLocation('');
    setNewLecturer('');
  }

  return (
    <div className="add-course">
      <input
        placeholder="course name"
        className="input-bar"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
        value={newName}
      />
      <input
        placeholder="location"
        className="input-bar"
        onChange={(event) => {
          setNewLocation(event.target.value);
        }}
        value={newLocation}
      />
      <input
        placeholder="lecturer"
        className="input-bar"
        onChange={(event) => {
          setNewLecturer(event.target.value);
        }}
        value={newLecturer}
      />
      <input
        type="color"
        className='input-color'
        onChange={(event) => {
          setNewColor(event.target.value);
        }}
      />
      <button className="add-button" onClick={clearNewCourseInput}>
        Clear
      </button>
    </div>
  );
}

export default AddCourse;
