import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        {/* About Hero */}
        <section id="about"className="about-hero section">
          <div className="about-content grid grid-2">
            <div className="about-text fade-in-up">
              <h1 className="section-title">About Me</h1>
              <p className="about-description">
                
                Hello! I'm Dilmi Sooriyaarachchi, 
                I'm a dedicated and curious student at the Institute of Technology, University of Moratuwa
                currently pursuing my National Diploma in Information Technology. With a passion for building 
                user-friendly digital experiences, I'm on a journey to become a full-stack web developer 
                who blends creativity with functionality.
              </p>
              <p className="about-description">
               I enjoy turning complex problems into simple, elegant solutions through clean code and thoughtful
               design. My learning path has taken me through various frontend and backend technologies, and I continuously
               challenge myself with new tools, frameworks, and projects.
              </p>
            </div>
            <div className="about-image fade-in">
              <img 
                src="/images/Me1.jpg" 
                alt="About me" 
                className="about-img"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
      <section className="skills section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid grid grid-3">
            <div className="skill-card card">
              <div className="skill-icon">🖥️</div>
              <h3>Frontend Development</h3>
              <p>React, JavaScript, HTML5, CSS3, Responsive Design</p>
            </div>
            <div className="skill-card card">
              <div className="skill-icon">⚙️</div>
              <h3>Backend Development</h3>
              <p>Node.js, Express, Python, Database Design</p>
            </div>
            <div className="skill-card card">
              <div className="skill-icon">🛠️</div>
              <h3>Tools & Technologies</h3>
              <p>Git, Docker, AWS, MongoDB, Linux</p>
            </div>
          </div>
        </div>
      </section>

        {/* Projects & Learning Experience */}
<section className="experience section">
  <h2 className="section-title">Projects & Learning Experience</h2>
  <div className="timeline">
    <div className="timeline-item">
      <div className="timeline-marker"></div>
      <div className="timeline-content card">
        <h3>Student Projects at ITUM</h3>
        <h4>Academic & Personal</h4>
        <span className="timeline-date">2023 - Present</span>
        <p>
          Built several academic projects involving frontend and backend development. 
          Gained hands-on experience with technologies like HTML, CSS, JavaScript, React, Node.js, and Python.
          Projects include portfolio websites, task managers, and web-based systems for small businesses.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-marker"></div>
      <div className="timeline-content card">
        <h3>Self-Learning & Practice</h3>
        <h4>Online Courses & Tutorials</h4>
        <span className="timeline-date">2022 - Present</span>
        <p>
          Completed multiple online tutorials and certifications to improve full-stack development skills.
          Focused on JavaScript frameworks, version control, responsive design, and backend integration.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-marker"></div>
      <div className="timeline-content card">
        <h3>Collaboration with Peers</h3>
        <h4>Team Mini Projects</h4>
        <span className="timeline-date">2023</span>
        <p>
          Worked on group projects with classmates to simulate real-world development. 
          Practiced Git collaboration, UI/UX design, and project planning in a team setting.
        </p>
      </div>
    </div>
  </div>
</section>


      </div>
    </div>
  );
};

export default About;