import './resume.css'; // Import styles

function Resume() {
  return (
    <div className="resume">
      <h1>resume</h1>

     
      <div className="resume-download">
  
        <a 
          href="././public/resume.pdf"
          download="Kirstin_Lisnoff_Resume.pdf"
          className="resume-button"
        >
          Download my resume here!
        </a>
      </div>

    </div>
  );
}

export default Resume;