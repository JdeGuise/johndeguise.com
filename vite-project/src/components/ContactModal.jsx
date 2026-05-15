import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './ContactModal.css'

function ContactModal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', company: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('')

  // Close the modal when the Escape key is pressed.
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  // Name, email, and message are required for Submit to be enabled.
  const isValid =
    form.name.trim() !== '' &&
    form.email.trim() !== '' &&
    form.message.trim() !== ''

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!isValid || status === 'sending') return

    setStatus('sending')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to send message.')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err.message)
    }
  }

  // Render through a portal on document.body so the fixed overlay escapes
  // the sticky `.content-details` stacking context and covers the page.
  return createPortal(
    <div className="contact-modal-overlay" onClick={onClose}>
      <div
        className="contact-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <h2 id="contact-modal-title" className="contact-modal-title">Get in touch</h2>

        {status === 'success' ? (
          <div className="contact-modal-success">
            <p>Thanks for reaching out! Your message has been sent.</p>
            <button
              type="button"
              className="contact-btn contact-btn-submit"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label className="contact-field">
              <span>Name <span className="contact-required">*</span></span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className="contact-field">
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </label>

            <label className="contact-field">
              <span>Email <span className="contact-required">*</span></span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="contact-field">
              <span>Message <span className="contact-required">*</span></span>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            {/* Honeypot: hidden from real users, but spam bots fill it. */}
            <div className="contact-hp" aria-hidden="true">
              <label>
                Company
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            {status === 'error' && (
              <p className="contact-modal-error">{errorMessage}</p>
            )}

            <div className="contact-modal-actions">
              <button
                type="button"
                className="contact-btn contact-btn-cancel"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="contact-btn contact-btn-submit"
                disabled={!isValid || status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Submit'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body
  )
}

export default ContactModal
