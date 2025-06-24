import { useState } from 'react';
import CurriculumColumn from './CurriculumColumn';
import './CurriculumPage.css';
import AddCourse from './AddCourse';

type Props = {
  editing: boolean;
};

function CurriculumPage({ editing }: Props) {
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newLecturer, setNewLecturer] = useState('');
  const [newColor, setNewColor] = useState('#ffa500');
  const courseTime: { start: string; end: string }[] = [
    { start: '08:10', end: '09:00' },
    { start: '09:10', end: '10:00' },
    { start: '10:20', end: '11:10' },
    { start: '11:20', end: '12:10' },
    { start: '12:20', end: '13:10' },
    { start: '13:20', end: '14:10' },
    { start: '14:20', end: '15:10' },
    { start: '15:30', end: '16:20' },
    { start: '16:30', end: '17:20' },
    { start: '17:30', end: '18:20' },
  ];

  return (
    <>
      {editing ? (
        <AddCourse
          newName={newName}
          setNewName={setNewName}
          newLocation={newLocation}
          setNewLocation={setNewLocation}
          newLecturer={newLecturer}
          setNewLecturer={setNewLecturer}
          setNewColor={setNewColor}
        />
      ) : (
        <></>
      )}
      <div className="curriculum-table">
        <div className="time">
          {courseTime.map((time, i) => {
            return (
              <div key={i} className="time-grid">
                <p className="time-number">{i + 1}</p>
                <p className="time-a-class">{time.start}</p>
                <p className="time-a-class">{time.end}</p>
              </div>
            );
          })}
        </div>
        {Array.from({ length: 5 }).map((_, i) => {
          return (
            <CurriculumColumn
              key={i}
              newName={newName}
              newLocation={newLocation}
              newLecturer={newLecturer}
              newColor={newColor}
              day={i + 1}
            />
          );
        })}
      </div>
    </>
  );
}

export default CurriculumPage;
