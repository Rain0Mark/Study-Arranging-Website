import './Header.css';

type Props = {
  editing: boolean;
  setEditing: (newValue: boolean) => void;
};

function Header({ editing, setEditing }: Props) {
  function triggerEditing() {
    setEditing(!editing);
  }

  return (
    <div className="header">
      <p>Header</p>
      <button
        className={editing ? 'edit-button editing' : 'edit-button'}
        onClick={triggerEditing}
      >
        {editing ? 'Cancel' : 'Edit Course'}
      </button>
    </div>
  );
}

export default Header;
