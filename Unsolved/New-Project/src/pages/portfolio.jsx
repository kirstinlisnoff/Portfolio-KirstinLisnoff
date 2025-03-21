import Project from '../components/project';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      
      <div className="portfolio-projects">
        <Project 
          title="Project 1"
          image='/Users/kirstinnoff/Desktop/repositories/github/HW12-React/Unsolved/New-Project/public/flightplan.png' // Replace with your image link
          deployedLink="https://your-deployed-app-link.com"
          githubLink="https://github.com/your-username/project1"
        />
        
        <Project 
          title="Project 2"
          image="https://via.placeholder.com/400" // Replace with your image link
          deployedLink="https://your-deployed-app-link.com"
          githubLink="https://github.com/your-username/project2"
        />
        
        {/* Add more projects as needed */}
      </div>
    </div>
  );
}

export default Portfolio;