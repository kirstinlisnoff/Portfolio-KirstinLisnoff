import './about.css'

function About() {
    return (
        <section className="about">
            <h1>about</h1>
            <h2>Get to Know Me!</h2>
            <div className="about-content">
            <img src="/avatar.jpg" alt="Kirstin Lisnoff" className="about-img"/>
            {/* <p>Hi, I’m Kirstin Lisnoff, a passionate web developer! I enjoy working
          on frontend technologies, and I’m always learning new tools and
          frameworks to improve my skills. I’m excited to collaborate on
          innovative projects and create meaningful web experiences.</p> */}
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