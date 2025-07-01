import './ReviewBarDone.css';

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

  return (
    <div className="review-bar-done">
      <input type="checkbox" checked={review.done} onChange={toggleDone} />
      <p className="review-bar-done-name">{review.name}</p>
      <p className="review-bar-done-end">{review.end}</p>
      <p className="review-bar-done-tag">{review.tag}</p>
    </div>
  );
}

export default ReviewBarDone;
