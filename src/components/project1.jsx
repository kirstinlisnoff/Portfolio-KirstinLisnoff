import './project.css'
import { useRef } from 'react';

function Project({ title, image, video, description, githubLink }) {

  const videoRef = useRef(null);

  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseLeave = () => videoRef.current?.pause();

    return (
      <div className="project" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='project-right'>
        <h3 className="project-title">{title}</h3>
        <p className="description">{description}</p>
        <div className="project-links">
    
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <span>View GitHub Repo</span>
          </a>
          </div> 
          </div>
          <div className='project-media'>
          <img src={image} alt={title} className="project-img" />
          <video
            ref={videoRef}
            className='hover-video'
            loop
            muted
            playsInline
            preload='none'
            >
              <source src={video} type='video/mp4'/>
            </video>
      </div>
      </div>
    );
  }
  
  export default Project; 