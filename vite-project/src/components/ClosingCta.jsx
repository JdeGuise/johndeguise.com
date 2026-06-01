import { useState } from 'react'
import './ClosingCta.css'
import ContactModal from './ContactModal'
import cta_json from '../data/cta.json'

function ClosingCta() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <section className="closing-cta" id="contact" aria-label="Get in touch">
      <h2 className="closing-cta-heading">{cta_json.heading}</h2>
      <p className="closing-cta-body">{cta_json.body}</p>

      <div className="closing-cta-actions">
        <a
          className="closing-cta-button"
          href={cta_json.buttonUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cta_json.buttonLabel}
        </a>
        <button
          type="button"
          className="closing-cta-link"
          onClick={() => setIsContactOpen(true)}
        >
          {cta_json.secondaryLabel}
        </button>
      </div>

      {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
    </section>
  )
}

export default ClosingCta
