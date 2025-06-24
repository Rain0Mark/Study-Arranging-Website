import { useState } from 'react';
import CurriculumPage from './components/Curriculum/CurriculumPage';
import Header from './components/Header';

function App() {
  const [editing, setEditing] = useState(false);
  return (
    <>
      <Header editing={editing} setEditing={setEditing} />
      <CurriculumPage editing={editing} />
    </>
  );
}

export default App;
