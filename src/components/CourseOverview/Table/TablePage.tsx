import { courseTime } from '../../../data/CourseTime';
import TableGrid from './TableGrid';

type Props = {
  courseList: {
    name: string;
    location: string;
    lecturer: string;
    color: string;
    inGrids: number[];
    id: string;
  }[];
  chosenGrids: number[];
  setChosenGrids: (grids: number[]) => void;
  editing: string;
};

function TablePage({
  courseList,
  chosenGrids,
  setChosenGrids,
  editing,
}: Props) {
  const grids = Array.from({ length: 50 }).map(() => ({
    name: '',
    location: '',
    lecturer: '',
    color: '#ffffff',
    id: '',
  }));

  courseList.forEach((course) => {
    course.inGrids.forEach((gridIndex) => {
      if (gridIndex >= 0 && gridIndex < grids.length) {
        grids[gridIndex] = {
          name: course.name,
          location: course.location,
          lecturer: course.lecturer,
          color: course.color,
          id: course.id,
        };
      }
    });
  });

  return (
    <div>
      <div>
        {courseTime.map((time, i) => (
          <div key={i}>
            <p>{i + 1}</p>
            <p>{time.start}</p>
            <p>{time.end}</p>
          </div>
        ))}
      </div>
      <div>
        <div>
          {['一', '二', '三', '四', '五'].map((w, i) => (
            <div key={i}>{`星期${w}`}</div>
          ))}
        </div>
        <div>
          {Array.from({ length: 10 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => {
              const index = row * 5 + col;
              return (
                <TableGrid
                  key={index}
                  course={grids[index]}
                  chosenGrids={chosenGrids}
                  setChosenGrids={setChosenGrids}
                  index={index}
                  editing={editing}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default TablePage;
