import CurriculumGrid from './CurriculumGrid';
import './CurriculumColumn.css';
import { numberToDay } from '../utils';

type CurriculumColumnProps = {
  newName: string;
  newLocation: string;
  newLecturer: string;
  newColor:string;
  key:number;
  day: number;
  editing: boolean;
};

function CurriculumColumn({
  newName,
  newLocation,
  newLecturer,
  newColor,
  day,
  editing
}: CurriculumColumnProps) {
  return (
    <div className="curriculum-column">
      <div className="week-row">{numberToDay(day)}</div>
      {Array.from({ length: 10 }).map((_, i) => (
        <CurriculumGrid
          gridKey={day * 10 + i}
          key={i}
          newName={newName}
          newLocation={newLocation}
          newLecturer={newLecturer}
          newColor={newColor}
          editing={editing}
        />
      ))}
    </div>
  );
}

export default CurriculumColumn;
