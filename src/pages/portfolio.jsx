import Project from '../components/project1';
import ProjectLeft from '../components/project2';
import './portfolio.css'

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>works</h1>
      <h2>Check out some sites I've worked on!</h2>
      
      <div className="portfolio-projects">
        <div className="flightplan">
        <Project 
          title="Flightplan Travel Planner"
          image="flightplan.png"
          description="BLABLAB"
          deployedLink="https://p1t1-akcj.github.io/ProjectOne/"
          githubLink="https://github.com/P1T1-AKCJ/ProjectOne.git"
        />
        </div>
      <div className="forkintheroad">
        <ProjectLeft 
          title="Fork in the Road"
          image="flightplan.png"
          description="BLABLAB"
          deployedLink="https://p1t1-akcj.github.io/ProjectOne/"
          githubLink="https://github.com/P1T1-AKCJ/ProjectOne.git"
      />
      </div>
      <div className="studyquest">
      <Project
          title="Fork in the Road"
          className="studyquest"
          description="BLABLAB"
          image="flightplan.png"
          deployedLink="https://p1t1-akcj.github.io/ProjectOne/"
          githubLink="https://github.com/P1T1-AKCJ/ProjectOne.git"
      />
      </div>
      </div>
    </div>
  );
}

export default Portfolio;