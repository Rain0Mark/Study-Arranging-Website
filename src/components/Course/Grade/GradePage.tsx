import { Typography, Box, Stack, Divider } from '@mui/material';
import GradeBar from './GradeBar';

type Props = {
  gradeList: {
    name: string;
    percent: number;
    scoreTimesHundred: number;
    id: string;
  }[];
  setGradeList: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        percent: number;
        scoreTimesHundred: number;
        id: string;
      }[]
    >
  >;
};

function GradePage({ gradeList, setGradeList }: Props) {
  let totalGradeTimes10000 = 0;
  gradeList.forEach((grade) => {
    totalGradeTimes10000 += grade.scoreTimesHundred * grade.percent;
  });

  const totalGrade = totalGradeTimes10000 / 10000;

  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h5"
        gutterBottom
        color="white"
        sx={{ mb: 3, textAlign: 'center' }}
      >
        Total Grade：{totalGrade.toFixed(2)}
      </Typography>

      <Stack spacing={2}>
        {gradeList.map((grade) => (
          <GradeBar
            key={grade.id}
            grade={grade}
            setGradeList={setGradeList}
          />
        ))}
      </Stack>

      <Divider sx={{ mt: 4, borderColor: 'white', opacity: 0.3 }} />
    </Box>
  );
}

export default GradePage;