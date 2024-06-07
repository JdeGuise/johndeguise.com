function Job(props) {

  if (props.job) {
    return (
      <div>
        <div className="column year-range">
          {props.job.range}
        </div>
        <div className="column job-info">
          <h4>{props.job.header}</h4>
          <p>{props.job.description}</p>
        </div>
      </div>
    )
  }

}

export default Job
