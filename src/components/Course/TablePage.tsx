import { courseTime } from './CourseTime';
import TableGrid from './TableGrid';
import './TablePage.css';

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
  editing: boolean;
};

function TablePage({ courseList, chosenGrids, setChosenGrids, editing }: Props) {
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
    <div className="curriculum-table-fixed">
      <div className="time-fixed">
        <div className="time-week-row-fixed"></div> {/* 空白格，對齊星期 */}
        {courseTime.map((time, i) => (
          <div key={i} className="time-grid-fixed">
            <p className="time-number">{i + 1}</p>
            <p className="time-a-class">{time.start}</p>
            <p className="time-a-class">{time.end}</p>
          </div>
        ))}
      </div>
      <div className="table-main-area">
        <div className="week-row">
          {['一', '二', '三', '四', '五'].map((w, i) => (
            <div className="week-title" key={i}>{`星期${w}`}</div>
          ))}
        </div>
        <div className="table-grid-wrapper-fixed">
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
