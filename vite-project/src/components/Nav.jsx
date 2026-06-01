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
          <a href="#experience">Track Record</a>
        </div>
        <div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              setIsContactOpen(true)
            }}
          >
            Let&apos;s talk
          </a>
        </div>

        {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
      </div>
    )
  }

  export default Nav
