import { useState } from 'react';
import { Stack, TextField, Button } from '@mui/material';

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

function GradeEdit({ gradeList, setGradeList }: Props) {
  const [newGrade, setNewGrade] = useState({
    name: '',
    percent: 0,
  });

  function addNewGrade() {
    if (!newGrade.name.trim()) {
      alert('請輸入成績名稱');
      return;
    }

    const newGradeItem = {
      id: crypto.randomUUID(),
      name: newGrade.name,
      percent: newGrade.percent,
      scoreTimesHundred: 0,
    };

    setGradeList([...gradeList, newGradeItem]);
    setNewGrade({ name: '', percent: 0 });
  }

  return (
    <Stack spacing={2} sx={{ p: 2, color: 'white' }}>
      <TextField
        fullWidth
        label="成績名稱"
        variant="outlined"
        value={newGrade.name}
        onChange={(event) =>
          setNewGrade({ ...newGrade, name: event.target.value })
        }
        sx={{
          input: { color: 'white' },
          label: { color: 'white' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
            '&:hover fieldset': { borderColor: 'white' },
          },
        }}
      />

      <TextField
        fullWidth
        type="number"
        label="佔比 (%)"
        variant="outlined"
        value={newGrade.percent}
        onChange={(event) =>
          setNewGrade({ ...newGrade, percent: Number(event.target.value) })
        }
        onFocus={(e) => e.target.select()}
        sx={{
          input: { color: 'white' },
          label: { color: 'white' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
            '&:hover fieldset': { borderColor: 'white' },
          },
        }}
      />

      <Button variant="contained" color="primary" onClick={addNewGrade}>
        新增成績項目
      </Button>
    </Stack>
  );
}

export default GradeEdit;
