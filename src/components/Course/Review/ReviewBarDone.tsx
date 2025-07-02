import { Checkbox, Grid, Paper, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  review: {
    name: string;
    due: string;
    tag: string;
    id: string;
    done: boolean;
    end: string;
  };
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

function ReviewBarDone({ review, setReviewList }: Props) {
  const toggleDone = () => {
    setReviewList((prevList) =>
      prevList.map((item) =>
        item.id === review.id ? { ...item, done: !item.done, end: '' } : item
      )
    );
  };

  const deleteReview = () => {
    setReviewList((prevList) =>
      prevList.filter((item) => item.id !== review.id)
    );
  };

  return (
    <Paper
      elevation={3}
      sx={{
        bgcolor: '#444',
        p: 2,
        mb: 1,
        color: 'white',
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid
          size={{ xs: 1 }}
          sx={{ display: 'flex', justifyContent: 'flex-start' }}
        >
          <Checkbox
            checked={review.done}
            onChange={toggleDone}
            sx={{ color: 'white' }}
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Typography fontSize={{ xs: '0.9rem', sm: '1rem' }}>
            {review.name}
          </Typography>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Typography fontSize={{ xs: '0.8rem', sm: '1rem' }}>
            {review.end}
          </Typography>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Typography fontSize={{ xs: '0.8rem', sm: '1rem' }}>
            {review.tag}
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 1 }}
          sx={{ display: 'flex', justifyContent: 'flex-start' }}
        >
          <IconButton onClick={deleteReview} sx={{ color: 'white' }}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ReviewBarDone;
