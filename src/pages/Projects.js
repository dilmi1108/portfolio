import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Library Management System",
      description: "A web-based Library Management System to streamline book tracking, student records, and borrowing activities efficiently.",
      image: "/images/Library.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    },
    {
      id: 2,
      title: "Learning Management System",
      description: "A personal productivity app for students to manage tasks, track mood, view academic calendar, and access subject materials in one place.",
      image:"/images/Learn.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    },
    {
      id: 3,
      title: "To-do app",
      description: " simple and intuitive To-Do App to manage daily tasks, set priorities, and stay organized.",
      image: "/images/todo.jpg",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather conditions and forecasts with interactive maps and charts.",
      image: "/images/Weather.jpg",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS"],
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with user authentication, product catalog, shopping cart, and payment integration.",
      image: "/images/E-com.jpg",
      technologies: ["React", "CSS", "JavaScript", "Firebase"],
    },
    {
      id: 6,
      title: "clothing App",
      description: "A stylish and user-friendly app for browsing, selecting, and purchasing fashion items online",
      image: "images/clothing.jpg",
      technologies: ["React", "MySQL", "CSS"],
    },
  ];

  return (
    <div className="projects">
      <div className="container">
        {/* Projects Hero */}
        <section id="projects"  className="projects-hero section">
          <h1 className="section-title fade-in-up">My Projects</h1>
          <p className="projects-subtitle fade-in-up">
            I’ve developed several web applications during my academic journey to explore real-world problem-solving with code. 
            Below is a showcase of projects including my personal student-focused companion app, along with other featured works.
          </p>
        </section>

        {/* Projects List */}
        <section className="other-projects section">
          <div className="projects-grid grid grid-3">
            {projects.map(project => (
              <div key={project.id} className="project-card card fade-in-up">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
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
