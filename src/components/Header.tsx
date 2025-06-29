import './Header.css';

type Props = {
  editing: string;
  setEditing: (newValue: string) => void;
  setShowing: (newValue: string) => void;
  setChosenGrids: (grids: number[]) => void;
};

function Header({ editing, setEditing, setShowing, setChosenGrids }: Props) {
  return (
    <div className="header">
      <div className="header-buttons">
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
      <button
        onClick={() => {
          setEditing(editing === 'todo' ? 'none' : 'todo');
          setShowing('todo');
          setChosenGrids([]);
        }}
      >
        Add Todo
      </button>
      <button
        onClick={() => {
          setEditing(editing === 'course' ? 'none' : 'course');
          setShowing('table');
          setChosenGrids([]);
        }}
      >
        Edit Course
      </button>
    </div>
  );
}

export default Header;
