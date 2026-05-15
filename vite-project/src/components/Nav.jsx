import { useState } from 'react'
import './Nav.css'
import ContactModal from './ContactModal'

function Nav() {
    const [isContactOpen, setIsContactOpen] = useState(false)

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
        <div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              setIsContactOpen(true)
            }}
          >
            Contact
          </a>
        </div>

        {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
      </div>
    )
  }

  export default Nav
