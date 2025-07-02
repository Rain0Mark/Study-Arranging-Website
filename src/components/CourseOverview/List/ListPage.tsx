import { useNavigate } from 'react-router';
import { CardContent, Typography, Box, Paper, Stack } from '@mui/material';

type Props = {
  courseList: {
    name: string;
    location: string;
    lecturer: string;
    color: string;
    inGrids: number[];
    id: string;
  }[];
};

function ListPage({ courseList }: Props) {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 2 }}>
      <Stack spacing={2}>
        {courseList.map((course, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              cursor: 'pointer',
              backgroundColor: course.color || 'transparent',
              border: '2px solid rgb(105, 105, 105)',
              color: '#fff',
              '&:hover': {
                opacity: 0.9,
              },
            }}
            onClick={() => course.id && navigate(`/course/${course.id}`)}
          >
            <CardContent>
              <Typography variant="h6" component="div">
                {course.name}
              </Typography>
              <Typography variant="body2">{course.location}</Typography>
              <Typography variant="body2">{course.lecturer}</Typography>
            </CardContent>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}

export default ListPage;
