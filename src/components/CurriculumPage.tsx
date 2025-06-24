import CurriculumColumn from "./CurriculumColumn"
import './CurriculumPage.css'

function CurriculumPage() {
	return (
		<div className="curriculum-table">
			<CurriculumColumn />
			<CurriculumColumn />
			<CurriculumColumn />
			<CurriculumColumn />
			<CurriculumColumn />
		</div>
	)
}

export default CurriculumPage