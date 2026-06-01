function Job(props) {
  if (!props.job) {
    return null
  }

  return (
    <a
      href={props.job.companyUrl}
      className="job-anchor"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="job-content">
          <div className="column year-range">
            {props.job.range}
          </div>
          <div className="column job-info">
            <h3>{props.job.header}</h3>
            <p>{props.job.description}</p>
          </div>
      </div>
    </a>
  )
}

export default Job
