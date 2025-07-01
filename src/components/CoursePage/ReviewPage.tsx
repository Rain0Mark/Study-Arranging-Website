import ReviewBar from './ReviewBar';
import ReviewBarDone from './ReviewBarDone';
import './ReviewPage.css';

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
    <div className="review-page-container">
      <h1>未完成事項</h1>
      <div className="review-not-done-tag">
        <p>範圍</p>
        <p>死線</p>
        <p>備注</p>
      </div>
      <div className="review-not-done">
        {reviewListNotDone.map((review) => {
          return (
            <ReviewBar
              key={review.id}
              review={review}
              setReviewList={setReviewList}
            />
          );
        })}
      </div>
      <h1>已完成事項</h1>
      <div className="review-done-tag">
        <p>範圍</p>
        <p>完成日期</p>
        <p>備注</p>
      </div>
      <div className="review-done">
        {reviewListDone
          .slice()
          .reverse()
          .map((review) => {
            return (
              <ReviewBarDone
                key={review.id}
                review={review}
                setReviewList={setReviewList}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ReviewPage;
