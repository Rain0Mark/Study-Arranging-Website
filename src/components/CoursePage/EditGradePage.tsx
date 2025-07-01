import { useState } from 'react';

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

function EditGradePage({ gradeList, setGradeList }: Props) {
  const [newGrade, setNewGrade] = useState({
    name: '',
    percent: 0,
    scoreTimesHundred: 0,
  });

  function addNewGrade() {
    if (!newGrade.name) {
      alert('請輸入成績名稱');
      return;
    }
    const newGradeItem = {
      id: crypto.randomUUID(),
      name: newGrade.name,
      percent: newGrade.percent,
      scoreTimesHundred: newGrade.scoreTimesHundred,
    };

    setGradeList([...gradeList, newGradeItem]);
    setNewGrade({
      name: '',
      percent: 0,
      scoreTimesHundred: 0,
    });
  }

  return (
    <div className="edit-grade-page-container">
      <input
        className="grade-name-input"
        placeholder="輸入名稱"
        onChange={(event) => {
          setNewGrade({ ...newGrade, name: event.target.value });
        }}
        value={newGrade.name}
      />
      <input
        className="grade-percent-input"
        type='number'
        placeholder="輸入佔比"
        value={newGrade.percent}
        onChange={(event) => {
          setNewGrade({ ...newGrade, percent: Number(event.target.value) });
        }}
      />
      <button className="grade-add-button" onClick={addNewGrade}>
        新增複習進度
      </button>
    </div>
  );
}

export default EditGradePage;
