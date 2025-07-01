import { IoMdAddCircleOutline } from 'react-icons/io';
import { ImCancelCircle } from 'react-icons/im';

type Props = {
  editing: string;
  setEditing: (newValue: string) => void;
  setShowing: (newValue: string) => void;
  setChosenGrids: (grids: number[]) => void;
};

function Header({ editing, setEditing, setShowing, setChosenGrids }: Props) {
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setShowing('table');
            setEditing('none');
            setChosenGrids([]);
          }}
        >
          Table
        </button>
        <button
          onClick={() => {
            setShowing('list');
            setEditing('none');
            setChosenGrids([]);
          }}
        >
          List
        </button>
        <button
          onClick={() => {
            setShowing('todo');
            setEditing('none');
            setChosenGrids([]);
          }}
        >
          Todo
        </button>
      </div>
      
      <p>Header</p>
      <div>
        <button
          onClick={() => {
            setEditing(editing === 'todo' ? 'none' : 'todo');
            setShowing('todo');
            setChosenGrids([]);
          }}
        >
          {editing === 'todo' ? (
            <>
              <ImCancelCircle />
              <>Cancel</>
            </>
          ) : (
            <>
              <IoMdAddCircleOutline />
              Add Todo
            </>
          )}
        </button>
        <button
          onClick={() => {
            setEditing(editing === 'course' ? 'none' : 'course');
            setShowing('table');
            setChosenGrids([]);
          }}
        >
          {editing === 'course' ? (
            <>
              <ImCancelCircle />
              <>Cancel</>
            </>
          ) : (
            <>
              <IoMdAddCircleOutline />
              Add Course
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
