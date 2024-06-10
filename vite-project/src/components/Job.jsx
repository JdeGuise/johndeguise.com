function Job(props) {

  if (props.job) {
    return (
      <div className="job-content">
        <div className="column year-range">
          {props.job.range}
        </div>
        <div className="column job-info">
          <h5>{props.job.header}</h5>
          <p>{props.job.description}</p>
        </div>
      </div>
    )
  }

}

export default Job
