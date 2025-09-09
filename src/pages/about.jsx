import './about.css'

function About() {
    return (
        <section className="about">
            <h1>about</h1>
            <h2>Get to Know Kirstin!</h2>
            <div className="about-content">
              <div className='about-left'>
                <img src="/avatar.jpg" alt="Kirstin Lisnoff" className="about-img"/>
                  <div className='social-icons'>
                    <ul>
                      <li>
                        <a href="https://www.linkedin.com/in/kirstin-lisnoff-3b4b9820b/" target="_blank" rel="noopener noreferrer">
                            <img src="/linkedinicon.png" alt="LinkedIn" className="social-icon" />
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/kirstinlisnoff" target="_blank" rel="noopener noreferrer">
                            <img src="/githubicon.png" alt="GitHub" className="social-icon" />
                        </a>
                      </li>
                  </ul>
                </div>
              </div>
            <div className="about-text">
                <p>I am a passionate, curiosity-driven web developer looking to expand my knowlege. I strive to write clean code and utilize creative thinking to navigate problem-solving.</p>
                <p>I have a BA in Mathematics from Binghamton University. Studying complex number theory and breaking down multivariable differential equations has allowed me to tackle programming challenges with a unique perspective. I also completed a minor in Spanish during undergrad. Languages, whether in terms of code or linguistics, have always peaked my interest.  </p>
                <p>Post-grad I recieved a certification for completing the Columbia Engineering Coding Boot Camp, which is where I learned to code!</p>
          </div>
          </div>
          
            
        </section>
    );
}

export default About;