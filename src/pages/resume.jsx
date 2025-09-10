import './resume.css'; // Import styles

function Resume() {
  return (
    <div className="resume">
      <h2>Resume</h2>

     
      <div className="resume-download">
        <p>Download my resume here:</p>
        <a 
          href="dist/Resume.pdf" // Update with the correct path to your resume file
          download="Kirstin_Lisnoff_Resume.pdf"
          className="resume-button"
        >
          Download Resume
        </a>
      </div>

    </div>
  );
}

export default Resume;