import './Nav.css'
import Pdf from './../assets/JdeGuise.pdf';

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
          <a href={Pdf} target ="_blank">Resume</a>
        </div>
      </div>
    )
  }
    
  export default Nav