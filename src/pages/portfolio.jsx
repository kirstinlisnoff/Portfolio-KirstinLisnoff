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
          image="/flightplanIMG.png"
          video="/flightplan2x.mp4"
          description="An interactive front-end web application that allows users to create and update a task list in preparation for travel. It features a sleek and modern design, with a focus on user experience and ease of use. The application is built using HTML, CSS, and JavaScript, and is designed to be responsive and mobile-friendly."
          deployedLink="https://p1t1-akcj.github.io/ProjectOne/"
          githubLink="https://github.com/P1T1-AKCJ/ProjectOne.git"
        />
        </div>
      <div className="forkintheroad">
        <ProjectLeft 
          title="Fork in the Road"
          image="/fitrIMG.png"
          video="/FITR2x.mp4"
          description="A sleek full-stack app designed to help make the often stressful task of deciding where to eat a breeze.
          It features a user-friendly interface where users can input their dining preferences and receive personalized restaurant recommendations based on their location and desired cuisine type."
          deployedLink="https://p1t1-akcj.github.io/ProjectOne/"
          githubLink="https://github.com/P1T1-AKCJ/ProjectOne.git"
      />
      </div>
      <div className="studyquest">
      <Project
          title="StudyQuest"
          className="studyquest"
          description="A full-stack web application where students can create flashcard decks and study them in an engaging way. It features a user-friendly interface to organize study plans, play a variation of games with their decks, and monitor their performance over time."
          image="/StudyQuestIMG.png"
          video="/StudyQuest2x.mp4"
          deployedLink="https://p1t1-akcj.github.io/ProjectOne/"
          githubLink="https://github.com/P1T1-AKCJ/ProjectOne.git"
      />
      </div>
      </div>
    </div>
  );
}

export default Portfolio;