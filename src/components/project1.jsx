import './project.css'

function Project({ title, image, description, githubLink }) {
    return (
      <div className="project">
        <div className='project-right'>
        <h3 className="project-title">{title}</h3>
        <p className="description">{description}</p>
        <div className="project-links">
          {/* <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="project-link">
            View Deployed App
          </a> */}
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <span>View GitHub Repo</span>
          </a>
          </div> 
          </div>
          <img src={image} alt={title} className="project-img" />
      </div>
    );
  }
  
  export default Project; 