type Props = {
  grade: {
    name: string;
    percent: number;
    scoreTimesHundred: number;
    id: string;
  };
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
function GradeBar({ grade, setGradeList }: Props) {
  function toggleGradeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setGradeList((prevList) =>
      prevList.map((item) =>
        item.id === grade.id
          ? { ...item, scoreTimesHundred: Number(event.target.value) * 100 }
          : item
      )
    );
  }

  return (
    <div>
      <p>{grade.name}</p>
      <p>{grade.percent}</p>
      <input
        value={grade.scoreTimesHundred / 100}
        onChange={toggleGradeInput}
      />
    </div>
  );
}

export default GradeBar;
