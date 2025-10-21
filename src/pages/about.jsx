import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

function About() {
  const socials = [
    { name: "Git & GitHub", icon: faGithub, color: "#192F39", link: "https://github.com/kirstinlisnoff" },
    { name: "LinkedIn", icon: faLinkedinIn, color: "#192F39", link: "https://www.linkedin.com/in/kirstin-lisnoff-9792452b6/" },
  ];

    return (
        <section className="about">
            <h1>about</h1>
            <h2>Get to know me!</h2>
            <div className="about-content">
              <div className='about-left'>
                <img src="/avatar.jpg" alt="Kirstin Lisnoff" className="about-img"/>
                  <div className='social-icons'>
                    <ul>
                      {/* <li>
                        <a href="https://www.linkedin.com/in/kirstin-lisnoff-3b4b9820b/" target="_blank" rel="noopener noreferrer">
                            <img src="/linkedinicon.png" alt="LinkedIn" className="social-icon" />
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/kirstinlisnoff" target="_blank" rel="noopener noreferrer">
                            <img src="/githubicon.png" alt="GitHub" className="social-icon" />
                        </a>
                      </li> */}
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
            <div className="about-text">
                <p>I am a passionate, curiosity-driven web developer looking to expand my knowlege. I strive to write clean code and utilize creative thinking to navigate problem-solving.</p>
                <p>I have a <strong>BA in Mathematics from Binghamton University</strong>. Studying complex number theory and breaking down multivariable differential equations has allowed me to tackle programming challenges with a unique perspective. Languages of all forms have always peaked my interest, as I also minored in Spanish.  </p>
                <p>Post-grad I recieved a <strong>certification for completing the Columbia Engineering Coding Boot Camp</strong>, which is where I learned to code!</p>
          </div>
          </div>
          
            
        </section>
    );
}

export default About;