import './Header.css';

type Props = {
  editing: boolean;
  setEditing: (newValue: boolean) => void;
  showTable: boolean;
  setShowTable: (newValue: boolean) => void;
  setChosenGrids: (grids: number[]) => void;
};

function Header({ editing, setEditing, showTable, setShowTable, setChosenGrids }: Props) {
  function triggerEditing() {
    if (editing) {
      setChosenGrids([]);
    }
    setEditing(!editing);
    setShowTable(true);
  }

  function triggerShowTable() {
    if (showTable) {
      setEditing(false);
    }
    setShowTable(!showTable);
  }

  return (
    <div className="header">
      <button className="header-button" onClick={triggerShowTable}>
        {showTable ? 'Show List' : 'Show Table'}
      </button>
      <p>Header</p>
      <button
        className={
          editing
            ? 'header-button edit-button editing'
            : 'header-button edit-button'
        }
        onClick={triggerEditing}
      >
        {editing ? 'Cancel' : 'Edit Course'}
      </button>
    </div>
  );
}

export default Header;
