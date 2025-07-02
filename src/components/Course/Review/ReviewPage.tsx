import { Typography, Box, Grid, Divider } from '@mui/material';
import ReviewBar from './ReviewBar';
import ReviewBarDone from './ReviewBarDone';

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

function ReviewPage({ reviewList, setReviewList }: Props) {
  const reviewListNotDone = reviewList.filter((review) => !review.done);
  const reviewListDone = reviewList.filter((review) => review.done);

  return (
    <Box sx={{ color: 'white' }}>
      <Typography variant="h5" gutterBottom>
        未完成進度
      </Typography>
      <Grid container spacing={2} sx={{ mb: 1 }}>
        <Grid size={1.1}>
          <Typography />
        </Grid>
        <Grid size={3.93}>
          <Typography>範圍</Typography>
        </Grid>
        <Grid size={2.9}>
          <Typography>死線</Typography>
        </Grid>
        <Grid size={4}>
          <Typography>備註</Typography>
        </Grid>
      </Grid>
      {reviewListNotDone.map((review) => (
        <ReviewBar
          key={review.id}
          review={review}
          setReviewList={setReviewList}
        />
      ))}

      <Divider sx={{ my: 4, borderColor: 'gray' }} />

      <Typography variant="h5" gutterBottom>
        已完成進度
      </Typography>
      <Grid container spacing={2} sx={{ mb: 1 }}>
        <Grid size={1.1}>
          <Typography />
        </Grid>
        <Grid size={3.93}>
          <Typography>範圍</Typography>
        </Grid>
        <Grid size={2.9}>
          <Typography>完成日期</Typography>
        </Grid>
        <Grid size={4}>
          <Typography>備註</Typography>
        </Grid>
      </Grid>
      {reviewListDone
        .slice()
        .reverse()
        .map((review) => (
          <ReviewBarDone
            key={review.id}
            review={review}
            setReviewList={setReviewList}
          />
        ))}
    </Box>
  );
}

export default ReviewPage;
