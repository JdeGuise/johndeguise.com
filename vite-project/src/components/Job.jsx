function Job(props) {

  if (props.job) {
    return (
      <a href={props.job.companyUrl} className="job-anchor" target="_blank">
        <div className="job-content">
            <div className="column year-range">
              {props.job.range}
            </div>
            <div className="column job-info">
              <h5>{props.job.header}</h5>
              <p>{props.job.description}</p>
            </div>
        </div>
      </a>
    )
  }

}

export default Job
