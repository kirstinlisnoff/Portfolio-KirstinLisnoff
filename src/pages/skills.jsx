import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareJs,
  faReact,
  faNodeJs,
  faHtml5,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import {
  faDatabase,
  faGear,
  faDesktop
} from '@fortawesome/free-solid-svg-icons';

function Skills() {
  const skills = [
    { name: "JavaScript", icon: faSquareJs, color: "white" },
    // { name: "TypeScript", icon: null, color: "white" }, // no official icon
    { name: "React.js", icon: faReact, color: "white" },
    { name: "HTML & CSS", icon: faHtml5, color: "white" },
    { name: "Node.js", icon: faNodeJs, color: "white" },
    { name: "PostgreSQL", icon: faDatabase, color: "white" },
    { name: "Git & GitHub", icon: faGithub, color: "white" },
    { name: "Web APIs", icon: faGear, color: "white" },
    { name: "Responsive Web Design", icon: faDesktop, color: "white" },
  ];

  return (
    <div className="skills">
      <h1>skills</h1>
      <h2>Here are the tools and technologies I work with to bring ideas to life.</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill.icon && (
              <FontAwesomeIcon
                icon={skill.icon}
                style={{ color: skill.color, marginRight: "0.5rem" }}
              />
            )}
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
