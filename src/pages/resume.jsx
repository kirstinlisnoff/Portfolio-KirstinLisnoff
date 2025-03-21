import './resume.css'; // Import styles

function Resume() {
  return (
    <div className="resume">
      <h2>Resume</h2>

     
      <div className="resume-download">
        <p>Download my resume here:</p>
        <a 
          href="/Resume.pdf" // Update with the correct path to your resume file
          download="Kirstin_Lisnoff_Resume.pdf"
          className="resume-button"
        >
          Download Resume
        </a>
      </div>

    
      <div className="resume-skills">
        <h3>Skills & Technologies</h3>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React.js</li>
          <li>HTML & CSS</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>Git & GitHub</li>
          <li>Web APIs</li>
          <li>Responsive Web Design</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;