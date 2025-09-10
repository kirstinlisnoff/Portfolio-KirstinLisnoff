import './project.css'

 function ProjectLeft({ title, image, description, deployedLink, githubLink }) {
    return (
      <div className="project">
        <img src={image} alt={title} className="project-img" />
        <div className='project-description'>
        <h3 className="project-title">{title}</h3>
        <p className="description">{description}</p>
        <div className="project-links">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="project-link">
            View Deployed App
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            View GitHub Repo
          </a>
          </div> 
          </div>
          
      </div>
    );
  }

    export default ProjectLeft;