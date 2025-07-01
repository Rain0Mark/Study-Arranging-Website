import './ReviewBar.css';
import dayjs from 'dayjs';

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

function ReviewBar({ review, setReviewList }: Props) {
  const toggleDone = () => {
    setReviewList((prevList) =>
      prevList.map((item) =>
        item.id === review.id ? { ...item, done: !item.done, end: dayjs().format("MM/DD") } : item
      )
    );
  };

  return (
    <div className="review-bar">
      <input type="checkbox" checked={review.done} onChange={toggleDone} />
      <p className="review-name">{review.name}</p>
      <p className="review-due">{review.due}</p>
      <p className="review-tag">{review.tag}</p>
    </div>
  );
}

export default ReviewBar;
