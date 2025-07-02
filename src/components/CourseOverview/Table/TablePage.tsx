import { courseTime } from '../../../data/CourseTime';
import TableGrid from './TableGrid';
import { Box, Grid, Typography } from '@mui/material';

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
      <Grid container sx={{ mb: 1 }}>
        {/* 補一格跟課堂時段一樣寬的空欄位 */}
        <Grid sx={{ width: '10%' }}></Grid>

        {/* 星期一～五 */}
        {['一', '二', '三', '四', '五'].map((w, i) => (
          <Grid
            key={i}
            sx={{
              width: '18%', // 或 '20%'，但要跟課表內格子一致
              textAlign: 'center',
              color: 'white',
              border: '1px solid #444',
              boxSizing: 'border-box',
              p: 1,
              bgcolor: '#333',
            }}
          >
            星期{w}
          </Grid>
        ))}
      </Grid>

      <Grid container>
        {/* 時間列 */}
        <Grid sx={{ width: '10%' }}>
          <Grid
            container
            direction="column"
            sx={{ border: '1px solid #ccc', bgcolor: '#222', color: 'white' }}
          >
            {courseTime.map((time, i) => (
              <Grid
                key={i}
                sx={{
                  height: 100,
                  borderBottom: '1px solid #555',
                  textAlign: 'center',
                }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  marginTop={1}
                >
                  <Typography>{time.end}</Typography>
                  <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                    {i + 1}
                  </Typography>
                  <Typography>{time.start}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* 課表內容 */}
        <Grid sx={{ width: '90%' }}>
          <Grid container sx={{ flexWrap: 'wrap' }}>
            {Array.from({ length: 10 }).map((_, row) =>
              Array.from({ length: 5 }).map((_, col) => {
                const index = row * 5 + col;
                return (
                  <Grid
                    key={index}
                    sx={{
                      width: '20%',
                      height: 100,
                      border: '1px solid #ccc',
                      boxSizing: 'border-box',
                      color: 'white',
                    }}
                  >
                    <TableGrid
                      course={grids[index]}
                      chosenGrids={chosenGrids}
                      setChosenGrids={setChosenGrids}
                      index={index}
                      editing={editing}
                    />
                  </Grid>
                );
              })
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default TablePage;
