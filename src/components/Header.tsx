import './Header.css';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { ImCancelCircle } from 'react-icons/im';

type Props = {
  editing: string;
  setEditing: (newValue: string) => void;
  showing: string;
  setShowing: (newValue: string) => void;
  setChosenGrids: (grids: number[]) => void;
};

function Header({
  editing,
  setEditing,
  showing,
  setShowing,
  setChosenGrids,
}: Props) {
  return (
    <div className="header">
      <div className="header-button-container">
        <button
          className={`table-button${showing === 'table' ? ' active' : ''}`}
          onClick={() => {
            setShowing('table');
            setEditing('none');
            setChosenGrids([]);
          }}
        >
          Table
        </button>
        <button
          className={`list-button${showing === 'list' ? ' active' : ''}`}
          onClick={() => {
            setShowing('list');
            setEditing('none');
            setChosenGrids([]);
          }}
        >
          List
        </button>
        <button
          className={`todo-button${showing === 'todo' ? ' active' : ''}`}
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
      <div className="add-button-container">
        <button
          className={editing === 'todo' ? 'edit-button delete-button' : 'edit-button'}
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
          className={
            editing === 'course' ? 'edit-button delete-button' : 'edit-button'
          }
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
              Add Todo
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
