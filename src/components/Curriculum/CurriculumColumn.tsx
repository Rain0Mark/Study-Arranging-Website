import CurriculumGrid from './CurriculumGrid';
import './CurriculumColumn.css';
import { numberToDay } from '../utils';

type CurriculumColumnProps = {
  newName: string;
  newLocation: string;
  newLecturer: string;
  newColor:string;
  day: number;
};

function CurriculumColumn({
  newName,
  newLocation,
  newLecturer,
  newColor,
  day,
}: CurriculumColumnProps) {
  return (
    <div className="curriculum-column">
      <div className="week-row">{numberToDay(day)}</div>
      {Array.from({ length: 10 }).map((_, i) => (
        <CurriculumGrid
          key={i}
          newName={newName}
          newLocation={newLocation}
          newLecturer={newLecturer}
          newColor={newColor}
        />
      ))}
    </div>
  );
}

export default CurriculumColumn;
