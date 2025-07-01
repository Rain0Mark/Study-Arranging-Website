import { useState } from 'react';
import { useParams } from 'react-router';
import TodoListPage from './TodoInCoursePage.tsx';
import ReviewPage from './ReviewPage.tsx';
import GradePage from './GradePage.tsx';
import EditTodoInCourse from './EditTodoInCourse.tsx';
import EditReviewPage from './EditReviewPage.tsx';
import EditGradePage from './EditGradePage.tsx';
import { useNavigate } from 'react-router';

type Props = {
  courseList: {
    name: string;
    location: string;
    lecturer: string;
    color: string;
    inGrids: number[];
    id: string;
  }[];
  todoList: {
    id: string;
    subject: string;
    name: string;
    start: string;
    end: string;
  }[];
  setTodoList: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        subject: string;
        name: string;
        start: string;
        end: string;
      }[]
    >
  >;
};

function CoursePage({ courseList, todoList, setTodoList }: Props) {
  const { id } = useParams();
  const [showing, setShowing] = useState('todo');
  const [editing, setEditing] = useState('none');
  const course = courseList.find((c) => c.id === id);
  const [reviewList, setReviewList] = useState<
    {
      name: string;
      due: string;
      tag: string;
      id: string;
      done: boolean;
      end: string;
    }[]
  >([]);
  const [gradeList, setGradeList] = useState<
    {
      name: string;
      percent: number;
      scoreTimesHundred: number;
      id: string;
    }[]
  >([]);

  const navigate = useNavigate();
  if (!course) return <div>404 Not Found 找不到課程</div>;

  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate(`/`);
          }}
        >
          回到首頁
        </button>
        <div>
          <h2>{course.name}</h2>
          <p>地點：{course.location}</p>
          <p>老師：{course.lecturer}</p>
        </div>
        <div>
          <button
            onClick={() => {
              setShowing('todo');
              setEditing('none');
            }}
          >
            Todo-List
          </button>
          <button
            onClick={() => {
              setShowing('review');
              setEditing('none');
            }}
          >
            複習進度
          </button>
          <button
            onClick={() => {
              setShowing('grade');
              setEditing('none');
            }}
          >
            成績
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setEditing(editing === 'todo' ? 'none' : 'todo');
              setShowing('todo');
            }}
          >
            Add Todo-List
          </button>
          <button
            onClick={() => {
              setEditing(editing === 'review' ? 'none' : 'review');
              setShowing('review');
            }}
          >
            Edit Review Progress
          </button>
          <button
            onClick={() => {
              setEditing(editing === 'grade' ? 'none' : 'grade');
              setShowing('grade');
            }}
          >
            Edit Grades
          </button>
        </div>
      </div>

      {editing === 'todo' ? (
        <EditTodoInCourse
          courseName={course.name}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ) : editing === 'review' ? (
        <EditReviewPage reviewList={reviewList} setReviewList={setReviewList} />
      ) : editing === 'grade' ? (
        <EditGradePage gradeList={gradeList} setGradeList={setGradeList} />
      ) : null}

      {showing === 'todo' ? (
        <TodoListPage
          todoList={todoList}
          setTodoList={setTodoList}
          course={course}
        />
      ) : showing === 'review' ? (
        <ReviewPage reviewList={reviewList} setReviewList={setReviewList} />
      ) : (
        <GradePage gradeList={gradeList} setGradeList={setGradeList} />
      )}
    </div>
  );
}

export default CoursePage;
