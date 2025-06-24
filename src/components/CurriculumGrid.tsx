import './CurriculumGrid.css';

function CurriculumGrid({
  name,
  location,
  lecturer,
}: {
  name: string;
  location: string;
  lecturer: string;
}) {
  return (
    <div className="curriculum-grid">
      <p className="grid-context">{name}</p>
      <p className="grid-context">{location}</p>
      <p className="grid-context">{lecturer}</p>
    </div>
  );
}

export default CurriculumGrid;
