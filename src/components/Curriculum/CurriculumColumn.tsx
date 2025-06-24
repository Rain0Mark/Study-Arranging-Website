import CurriculumGrid from './CurriculumGrid';
import './CurriculumColumn.css';
import { numberToDay } from '../utils';

type CurriculumColumnProps = {
  newName: string;
  newLocation: string;
  newLecturer: string;
  day: number;
};

function CurriculumColumn({
  newName,
  newLocation,
  newLecturer,
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
        />
      ))}
    </div>
  );
}

export default CurriculumColumn;
