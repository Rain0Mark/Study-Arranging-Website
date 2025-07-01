import { useState } from 'react';
import dayjs from 'dayjs';

type Props = {
  reviewList: {
    name: string;
    due: string;
    tag: string;
    id: string;
  }[];
  setReviewList: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        due: string;
        tag: string;
        id: string;
      }[]
    >
  >;
};

function EditReviewPage({ reviewList, setReviewList }: Props) {
  const [newReview, setNewReview] = useState({
    name: '',
    due: '',
    tag: '',
    id: '',
  });

  function addNewReview() {
    if (!newReview.name) {
      alert('請輸入複習進度名稱');
      return;
    }

    const newReviewItem = {
      id: crypto.randomUUID(),
      name: newReview.name,
      due: newReview.due,
      tag: newReview.tag,
    };

    const newReviewList = [...reviewList, newReviewItem].sort((a, b) => {
      const isABeforeB = dayjs(a.due).isBefore(dayjs(b.due));
      return isABeforeB ? -1 : 1;
    });
    setReviewList(newReviewList);

    setNewReview({
      name: '',
      due: '',
      tag: '',
      id: '',
    });
    return;
  }

  return (
    <div className="edit-review-container">
      <input
        className="review-name-input"
        placeholder="輸入名稱"
        onChange={(event) => {
          setNewReview({ ...newReview, name: event.target.value });
        }}
        value={newReview.name}
      />
      <input
        className="review-time-input"
        type="date-local"
        placeholder="死線"
        value={newReview.due}
        onChange={(event) => {
          setNewReview({ ...newReview, due: event.target.value });
        }}
      />
      <button className="todo-add-button" onClick={addNewReview}>
        新增複習進度
      </button>
    </div>
  );
}

export default EditReviewPage;
