import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="footer">
      <div className="footer-contents">
        <div className="footer-contents-social">
          <a href="https://www.linkedin.com/in/john-r-deguise"><img src="linkedin.svg" alt=""/></a>
          <a href="https://www.github.com/JdeGuise"><img src="github.svg" alt=""/></a>
          <a href="mailto:john@johndeguise.com"><img src="email.svg" alt=""/></a>
        </div>

        <div className="footer-contents-copyright">
          Copyright {currentYear} © John deGuise
        </div>
      </div>
    </div>

  )
}
  
export default Footer