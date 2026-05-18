import { useEffect } from 'react'
import './../App.css'
import './Artie.css'

function Artie() {
  // Dark mode is a Home-page-only feature; this memorial page stays light
  // regardless of the visitor's stored preference or browser setting.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light')
  }, [])

  return (
    <div className="to-artie">
      <div>
        I miss you every day. I&apos;ll love you forever.
      </div>
      <div>
        20 Jan 2018 - 17 Jun 2025
      </div>
      <div>
        2,705 days was not even 1% of the time I wish I had with you.
      </div>
      <div>
        Sweet dreams, and I&apos;ll see you soon.
      </div>
    </div>
  )
}

export default Artie