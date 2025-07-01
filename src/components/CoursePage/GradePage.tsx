import GradeBar from './GradeBar';

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

function GradePage({ gradeList, setGradeList }: Props) {
  let totalGradeTimes10000 = 0;
  gradeList.forEach((grade) => {
    totalGradeTimes10000 += grade.scoreTimesHundred * grade.percent;
  });
  return (
    <>
      <h1>Total Grade {(totalGradeTimes10000 / 10000).toFixed(2)}</h1>
      <div className="grade-page-tag">
        <p>名稱</p>
        <p>佔比</p>
        <p>成績</p>
      </div>
      {gradeList.map((grade) => {
        return <GradeBar grade={grade} setGradeList={setGradeList} />;
      })}
    </>
  );
}

export default GradePage;
