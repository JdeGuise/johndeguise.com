import './SectionHeader.css'

// Numbered editorial section header: a mono index and label, then a hairline
// rule that runs to the edge. The "blueprint" structure for each section.
function SectionHeader({ num, label }) {
  return (
    <div className="section-head">
      <span className="section-head-num">{num}</span>
      <h2 className="section-head-label">{label}</h2>
      <span className="section-head-rule" aria-hidden="true"></span>
    </div>
  )
}

export default SectionHeader
