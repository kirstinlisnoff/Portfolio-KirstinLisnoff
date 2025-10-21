
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';



function Footer() {
   const socials = [
    { name: "Git & GitHub", icon: faGithub, color: "white", link: "https://github.com/kirstinlisnoff" },
    { name: "LinkedIn", icon: faLinkedinIn, color: "white", link: "https://www.linkedin.com/in/kirstin-lisnoff-9792452b6/" },
  ];
    return(
        <footer className="footer">
          <div className="footer-container">  
          <h1>Kirstin Lisnoff</h1>
          <div className="footer-content">
          <p>kirstinlisnoff5@gmail.com</p>
        <div className ="social-icons">
          <ul>
             {socials.map((social, index) => (
                        <li key={index}>
                          {social.icon && (
                            <a
                              href={social.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            <FontAwesomeIcon
                              icon={social.icon}
                              style={{ color: social.color, marginRight: "0.5rem" }}
                            />
                            </a>
                          )}
                        
                        </li>
                      ))}
          </ul>
          </div>
          </div>
        </div>
        </footer>
    )
}

export default Footer;