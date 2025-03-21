
import "./footer.css"

function Footer() {
    return(
        <footer className="footer">
        <div className ="socials">
            <a href="https://github.com/kirstinlisnoff"target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> {/* Font Awesome GitHub Icon */}
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> {/* Font Awesome LinkedIn Icon */}
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> {/* Font Awesome Twitter Icon */}
        </a>
        </div>
        </footer>
    )
}

export default Footer;