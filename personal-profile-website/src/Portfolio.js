import { Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: "assets/heartful.png",
          title: "Heartful: Medical Management",
          description:
            "A full-stack medical management platform built with React and ColdFusion",
          technologies: ["React", "ColdFusion", "MySQL", "MUI"],
          project_live_demo:
            "http://ec2-98-92-133-251.compute-1.amazonaws.com/",
          project_view_code:
            "https://github.com/DummyClock/medical-management-web-app",
        },
        {
          project_image: "assets/primewell_clinic.png",
          title: "Primewell Clinic",
          description:
            "A full-stack medical platform built with React and Node.js",
          technologies: ["React", "Node.js", "MySQL", "AntDesign"],
          project_live_demo:
            "https://cs490-gp-frontend-production.up.railway.app/",
          project_view_code:
            "https://github.com/Aiden-Barrera/CS490-GP-Frontend",
        },
        {
          project_image: "assets/chilli.png",
          title: "The Global Chili Pepper Trail",
          description:
            "A React app about chili peppers and iconic dishes around the world.",
          technologies: ["React", "Material-UI"],
          project_live_demo: "https://github.allanrozario.com/NJIT-HSS404-Global-Chili-Pepper-Trail/",
          project_view_code: "https://github.com/AllanRoz/NJIT-HSS404-Global-Chili-Pepper-Trail",
        },
        {
          project_image: "assets/rsa.png",
          title: "RSA Algorithm",
          description:
            "A React app about the RSA Algorithm with an RSA calculator.",
          technologies: ["React", "Material-UI"],
          project_live_demo: "https://github.allanrozario.com/NJIT-CS351-RSA-Algorithm/",
          project_view_code: "https://github.com/AllanRoz/NJIT-CS351-RSA-Algorithm",
        },
        {
          project_image: "assets/digital-car-show.png",
          title: "Digital Motor Vehicle Show",
          description:
            "A website where you can view and upload images of Cars, SUVs, and Motorcycles",
          technologies: ["HTML", "JavaScript", "CSS", "PHP"],
          project_live_demo: "",
          project_view_code: "",
        },
        {
          project_image: "assets/pet_hotel_website.png",
          title: "Pet Hotel Reservation Website",
          description: "A website where you can reserve a hotel for your Pets",
          technologies: ["HTML", "JavaScript", "CSS", "PHP"],
          project_live_demo:
            "https://web.njit.edu/~ar358/classes/IT202/assignments/assignment_4/index.html",
          project_view_code: "",
        },
        {
          project_image: "assets/trivia_bot.png",
          title: "Trivia Discord Bot",
          description:
            "A discord bot that gives a multiple-choice trivia question to the user when invoked",
          technologies: ["JavaScript", "Discord.js", "Node.js"],
          project_live_demo: "",
          project_view_code: "https://github.com/AllanRoz/discord-trivia-bot",
        },
        {
          project_image: "assets/web_chat_app.png",
          title: "Web Chat App",
          description:
            "A Chat App hosted on the web where only the last message is saved",
          technologies: ["HTML", "JavaScript", "PHP", "MySQL"],
          project_live_demo:
            "https://web.njit.edu/~ar358/classes/IT202/assignments/assignment_5/index.php",
          project_view_code: "",
        },
      ],
    };
  }

  render() {
    return (
      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-container">
          <h2 className="portfolio-title">My Portfolio</h2>

          <div className="portfolio-content">
            {this.state.projects.map((project) => (
              <div className="portfolio-block">
                <img
                  src={project.project_image}
                  alt={`Screenshot of ${project.title}`}
                  className="project-image"
                />

                <div className="project-details">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>

                  <div className="technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="technology">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="buttons">
                    <a
                      href={project.project_live_demo}
                      className="portfolio-btn btn-live-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!project.project_live_demo) {
                          e.preventDefault();
                        }
                      }}
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.project_view_code}
                      className="portfolio-btn btn-view-code"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!project.project_view_code) {
                          e.preventDefault();
                        }
                      }}
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
