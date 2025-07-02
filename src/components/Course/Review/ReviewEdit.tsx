import { useState } from 'react';
import dayjs from 'dayjs';
import { Stack, TextField, Button } from '@mui/material';
import { getDateAfterWeek } from '../../../utils/date';

type Props = {
  reviewList: {
    name: string;
    due: string;
    tag: string;
    id: string;
    done: boolean;
    end: string;
  }[];
  setReviewList: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        due: string;
        tag: string;
        id: string;
        done: boolean;
        end: string;
      }[]
    >
  >;
};

function ReviewEdit({ reviewList, setReviewList }: Props) {
  const [newReview, setNewReview] = useState({
    name: '',
    due: getDateAfterWeek(),
    tag: '',
    done: false,
    end: '',
  });

  function addNewReview() {
    if (!newReview.name.trim()) {
      alert('請輸入複習進度名稱');
      return;
    }

    const newReviewItem = {
      name: newReview.name,
      due: newReview.due,
      tag: newReview.tag,
      id: crypto.randomUUID(),
      done: false,
      end: '',
    };

    const newReviewList = [...reviewList, newReviewItem].sort((a, b) => {
      return dayjs(a.due).isBefore(dayjs(b.due)) ? -1 : 1;
    });
    setReviewList(newReviewList);

    setNewReview({
      name: '',
      due: getDateAfterWeek(),
      tag: '',
      done: false,
      end: '',
    });
  }

  return (
    <Stack spacing={2} sx={{ p: 2, color: 'white' }}>
      <TextField
        fullWidth
        label="複習名稱"
        variant="outlined"
        value={newReview.name}
        onChange={(event) =>
          setNewReview({ ...newReview, name: event.target.value })
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
        type="date"
        label="截止日期"
        InputLabelProps={{ shrink: true }}
        value={newReview.due}
        onChange={(event) =>
          setNewReview({ ...newReview, due: event.target.value })
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
        label="備註"
        variant="outlined"
        value={newReview.tag}
        onChange={(event) =>
          setNewReview({ ...newReview, tag: event.target.value })
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

      <Button variant="contained" color="primary" onClick={addNewReview}>
        新增複習進度
      </Button>
    </Stack>
  );
}

export default ReviewEdit;