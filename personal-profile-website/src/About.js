import { Component } from "react";
import "./About.css";

class About extends Component {
  skills = [
    "Java", "Python", "C", "C++", "SQL (MySQL)", "JavaScript", "TypeScript", "HTML", "CSS", "PHP", "Bash", "Assembly", "React", "Node.js", "Express.js", "Material-UI", "AntDesign", "Bootstrap",
    "Git", "Docker", "AWS", "GCP", "Linux", "Figma", "CI/CD", "Jira", "Agile", "Selenium", "jQuery", "pandas", "NumPy", "Matplotlib", "Chart.js", "Frontend", "Backend", "Full-Stack", "OOP"
  ];

  render() {
    return (
      <div className="about-section">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="profile-image">
            <img src="assets/allan.jpg" alt="Allan"></img>
          </div>
          <div className="about-details">
            <p>
              My name is Allan Rozario currently a student at New Jersey
              Institute of Technology majoring in Computer Science and expected
              to graduate in December 2025. I have been programming since I was
              Junior in High School and have been interested in computers ever
              since I was 7 years old.
            </p>
            <p>
              Some of my hobbies outside of coding is I like to go on hikes,
              snowboard, gym, play video games, watch shows or movies and more.
            </p>

            <h2>Skills & Technologies</h2>
            <div className="skills-box">
              {this.skills.map((skill) => (
                <div key={skill} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
