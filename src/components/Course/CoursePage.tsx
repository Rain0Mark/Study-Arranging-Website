import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import CourseTodoPage from './CourseTodo/CourseTodoPage.tsx';
import ReviewPage from './Review/ReviewPage.tsx';
import GradePage from './Grade/GradePage.tsx';
import CourseTodoEdit from './CourseTodo/CourseTodoEdit.tsx';
import ReviewEdit from './Review/ReviewEdit.tsx';
import GradeEdit from './Grade/GradeEdit.tsx';
import {
  Tabs,
  Tab,
  Paper,
  Box,
  Button,
  Stack,
  Typography,
  Grid,
} from '@mui/material';

type Props = {
  courseList: {
    name: string;
    location: string;
    lecturer: string;
    color: string;
    inGrids: number[];
    id: string;
  }[];
  todoList: {
    id: string;
    subject: string;
    name: string;
    start: string;
    end: string;
  }[];
  setTodoList: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        subject: string;
        name: string;
        start: string;
        end: string;
      }[]
    >
  >;
};

function CoursePage({ courseList, todoList, setTodoList }: Props) {
  const { id } = useParams();
  const [showing, setShowing] = useState('review');
  const [editing, setEditing] = useState('none');
  const course = courseList.find((c) => c.id === id);
  const [reviewList, setReviewList] = useState<
    {
      name: string;
      due: string;
      tag: string;
      id: string;
      done: boolean;
      end: string;
    }[]
  >(() => {
    const saved = localStorage.getItem(`reviewList-${id}`);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (id) {
      localStorage.setItem(`reviewList-${id}`, JSON.stringify(reviewList));
    }
  }, [reviewList, id]);

  const [gradeList, setGradeList] = useState<
    {
      name: string;
      percent: number;
      scoreTimesHundred: number;
      id: string;
    }[]
  >(() => {
    const saved = localStorage.getItem(`gradeList-${id}`);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (id) {
      localStorage.setItem(`gradeList-${id}`, JSON.stringify(gradeList));
    }
  }, [gradeList, id]);

  const navigate = useNavigate();
  if (!course) return <div>404 Not Found 找不到課程</div>;

  return (
    <Box sx={{ p: 2 }}>
      <Button
        onClick={() => navigate(`/`)}
        variant="contained"
        sx={{ position: 'sticky', top: 0, zIndex: 1000 }}
      >
        回到首頁
      </Button>

      <Tabs
        value={['todo', 'review', 'grade'].indexOf(showing)}
        onChange={(_, newValue) => {
          setShowing(['todo', 'review', 'grade'][newValue]);
          setEditing('none');
        }}
        variant="fullWidth"
        textColor="inherit"
        indicatorColor="primary"
      >
        <Tab label="待辦事項" sx={{ color: 'white' }} />
        <Tab label="複習進度" sx={{ color: 'white' }} />
        <Tab label="成績列表" sx={{ color: 'white' }} />
      </Tabs>

      <Stack direction="row" spacing={2} justifyContent="space-around" my={2}>
        <Button
          variant={editing === 'todo' ? 'outlined' : 'contained'}
          onClick={() => {
            setEditing(editing === 'todo' ? 'none' : 'todo');
            setShowing('todo');
          }}
        >
          新增待辦事項
        </Button>
        <Button
          variant={editing === 'review' ? 'outlined' : 'contained'}
          onClick={() => {
            setEditing(editing === 'review' ? 'none' : 'review');
            setShowing('review');
          }}
        >
          新增複習進度
        </Button>
        <Button
          variant={editing === 'grade' ? 'outlined' : 'contained'}
          onClick={() => {
            setEditing(editing === 'grade' ? 'none' : 'grade');
            setShowing('grade');
          }}
        >
          新增成績列表
        </Button>
      </Stack>

      <Paper sx={{ p: 2, mb: 2, bgcolor: '#333', color: 'white' }}>
        <Grid container spacing={2}>
          <Grid>
            <Typography>課程名稱：{course.name}</Typography>
          </Grid>
          <Grid>
            <Typography>地點：{course.location}</Typography>
          </Grid>
          <Grid>
            <Typography>老師：{course.lecturer}</Typography>
          </Grid>
        </Grid>
      </Paper>

      {editing === 'todo' ? (
        <CourseTodoEdit
          courseName={course.name}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ) : editing === 'review' ? (
        <ReviewEdit reviewList={reviewList} setReviewList={setReviewList} />
      ) : editing === 'grade' ? (
        <GradeEdit gradeList={gradeList} setGradeList={setGradeList} />
      ) : null}

      {showing === 'todo' ? (
        <CourseTodoPage
          todoList={todoList}
          setTodoList={setTodoList}
          course={course}
        />
      ) : showing === 'review' ? (
        <ReviewPage reviewList={reviewList} setReviewList={setReviewList} />
      ) : (
        <GradePage gradeList={gradeList} setGradeList={setGradeList} />
      )}
    </Box>
  );
}

export default CoursePage;
