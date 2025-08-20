import Project from '../components/project';
import './portfolio.css'

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>check out my works!</h2>
      
      <div className="portfolio-projects">
        <Project 
          title="Flightplan Travel Planner"
          image="flightplan.png"
          deployedLink="https://p1t1-akcj.github.io/ProjectOne/"
          githubLink="https://github.com/P1T1-AKCJ/ProjectOne.git"
        />
     
      </div>
    </div>
  );
}

export default Portfolio;