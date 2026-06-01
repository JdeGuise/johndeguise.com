import './Approach.css'
import SectionHeader from './SectionHeader'
import approach_json from '../data/approach.json'

function Approach() {
  return (
    <section className="m-bot-md approach reveal" id="ai" aria-label="How I work with AI">
      <SectionHeader num="02" label={approach_json.heading} />
      <p className="approach-intro">{approach_json.intro}</p>
      <div className="approach-points">
        {approach_json.points.map(function (point) {
          return (
            <div className="approach-point" key={point.label}>
              <h3 className="approach-point-label">{point.label}</h3>
              <p className="approach-point-description">{point.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Approach
