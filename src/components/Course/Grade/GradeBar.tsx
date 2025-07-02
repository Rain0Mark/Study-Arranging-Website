import { TextField, Typography, Box, Stack, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  grade: {
    name: string;
    percent: number;
    scoreTimesHundred: number;
    id: string;
  };
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

function GradeBar({ grade, setGradeList }: Props) {
  function toggleGradeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const newScore = Number(event.target.value) * 100;

    setGradeList((prevList) =>
      prevList.map((item) =>
        item.id === grade.id ? { ...item, scoreTimesHundred: newScore } : item
      )
    );
  }

  function deleteGrade() {
    setGradeList((prevList) => prevList.filter((item) => item.id !== grade.id));
  }

  return (
    <Box
      sx={{
        bgcolor: '#2c2c2c',
        borderRadius: 2,
        p: 2,
        mb: 2,
        color: 'white',
        boxShadow: 2,
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Box sx={{ flex: 2 }}>
          <Typography variant="subtitle1">{grade.name}</Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body2">{grade.percent}%</Typography>
        </Box>
        <Box sx={{ flex: 2 }}>
          <TextField
            fullWidth
            label="成績"
            type="number"
            variant="outlined"
            value={grade.scoreTimesHundred / 100}
            onChange={toggleGradeInput}
            onFocus={(e) => e.target.select()}
            inputProps={{ min: 0, step: 0.01 }}
            sx={{
              input: { color: 'white' },
              label: { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
              },
            }}
          />
        </Box>
        <Box sx={{ flexShrink: 0 }}>
          <IconButton onClick={deleteGrade} color="error">
            <DeleteIcon />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
}

export default GradeBar;
