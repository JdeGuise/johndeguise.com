import './Nav.css'

function Nav() {
    return (
      <div className="jumbotron-nav pt-5">
        <div>
          <a href="#about">About</a>
        </div>
        <div>
          <a href="#experience">Experience</a>
        </div>
        <div>
          <a href="/assets/JdeGuise.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
    )
  }
    
  export default Nav