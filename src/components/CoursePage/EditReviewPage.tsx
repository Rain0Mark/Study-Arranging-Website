import { useState } from 'react';
import dayjs from 'dayjs';
import { getDateAfterWeek } from '../../utils.tsx/date';

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

function EditReviewPage({ reviewList, setReviewList }: Props) {
  const [newReview, setNewReview] = useState({
    name: '',
    due: getDateAfterWeek(),
    tag: '',
    done: false,
    end: '',
  });

  function addNewReview() {
    if (!newReview.name) {
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
      const isABeforeB = dayjs(a.due).isBefore(dayjs(b.due));
      return isABeforeB ? -1 : 1;
    });
    setReviewList(newReviewList);

    setNewReview({
      name: '',
      due: getDateAfterWeek(),
      tag: '',
      done: false,
      end: '',
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
        type="date"
        placeholder="死線"
        value={newReview.due}
        onChange={(event) => {
          setNewReview({ ...newReview, due: event.target.value });
        }}
      />
      <input
        className="review-tag-input"
        placeholder="備註事項"
        value={newReview.tag}
        onChange={(event) => {
          setNewReview({ ...newReview, tag: event.target.value });
        }}
      />
      <button className="todo-add-button" onClick={addNewReview}>
        新增複習進度
      </button>
    </div>
  );
}

export default EditReviewPage;
