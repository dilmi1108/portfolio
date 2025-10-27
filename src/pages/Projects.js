import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Garment Production Tracking System (SGPTOS)",
      description:
        "Final year group project developed using the MERN stack with RFID and IoT integration. Contributed to both development and manual testing, including API and performance testing using JMeter.",
      image: "/images/SGPTOS.jpg", // update your image path
      technologies: ["React", "Node.js", "MongoDB", "IoT", "JMeter", "Postman"],
      link: "https://github.com/SasinduV0/SGPTOS-FinalProject.git",
    },
    {
      id: 2,
      title: "POS System Automation Testing Framework",
      description:
        "Developed a comprehensive automation testing framework for a POS system using Java, Selenium WebDriver, TestNG, and Maven. Implemented Page Object Model for better scalability and reusability.",
      image: "/images/POS.jpg",
      technologies: ["Java", "Selenium", "TestNG", "Maven"],
      link: "https://github.com/dilmi1108/FrameWork.git",
    },
    {
      id: 3,
      title: "Java Library Management System",
      description:
        "A Java-based console application designed to manage library operations including book tracking, borrowing, and user management. Focused on manual testing and validation of core functionalities.",
      image: "/images/Library.jpg",
      technologies: ["Java"],
      link: "https://github.com/dilmi1108/LibraryManagementSystem.git",
    },
    {
      id: 4,
      title: "Web-Based Conference Management System",
      description:
        "A web-based system for managing academic conferences with session scheduling, user registration, and form validation. Developed using HTML, CSS, JavaScript, and MySQL.",
      image: "/images/Conference.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      link: "https://github.com/dilmi1108/WebBasedConferenceDayManagementSystem.git",
    },
    {
      id: 5,
      title: "Basic Test Automation Scripts",
      description:
        "Learning project focusing on foundational automation testing using Selenium WebDriver and TestNG with Java. Practiced applying the Page Object Model design pattern for script reusability.",
      image: "/images/Automation.jpg",
      technologies: ["Java", "Selenium", "TestNG"],
      link: "https://github.com/dilmi1108/BasicAutomationScipt.git",
    },
    {
      id: 5,
      title: "StyleHub – A Modern Clothing Web App",
      description:
        "StyleHub, a responsive clothing e-commerce web application built with ReactJS, Vite, and Tailwind CSS. Features dynamic product listings, user authentication, and a shopping cart.",
      image: "/images/ClothingWeb.jpg",
      technologies: ["ReactJS", "Vite", "Tailwind CSS"],
      link: "https://github.com/dilmi1108/stylehub-clothingapp.git",
    },
  ];

  return (
    <div className="projects">
      <div className="container">
        {/* Projects Hero Section */}
        <section id="projects" className="projects-hero section">
          <h1 className="section-title fade-in-up">My Projects</h1>
          <p className="projects-subtitle fade-in-up">
            Here’s a collection of my academic, automation, and self-learning projects showcasing my
            hands-on experience in development, testing, and continuous learning. Each project helped
            strengthen my QA engineering and software development skills.
          </p>
        </section>

        {/* Projects List */}
        <section className="other-projects section">
          <div className="projects-grid grid grid-3">
            {projects.map((project) => (
              <div key={project.id} className="project-card card fade-in-up">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-github"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
