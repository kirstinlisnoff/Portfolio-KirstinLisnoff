import './project.css'

function Project({ title, image, deployedLink, githubLink }) {
    return (
      <div className="project">
        <img src={image} alt={title} className="project-img" />
        <h3 className="project-title">{title}</h3>
        <div className="project-links">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="project-link">
            View Deployed App
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            View GitHub Repo
          </a>
        </div>
      </div>
    );
  }
  
  export default Project;