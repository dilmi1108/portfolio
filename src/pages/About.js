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
                
                Hello! I'm Dilmi Sooriyaarachchi, a dedicated and curious student at the Institute of Technology, University of Moratuwa, currently pursuing a National Diploma in Information Technology.
                 With a passion for ensuring software quality, I’m on a journey to become a Quality Assurance Engineer who guarantees reliable, efficient, and user-friendly digital experiences.
              </p>
              <p className="about-description">
               I specialize in both manual and automation testing, ensuring that applications perform seamlessly across all stages of development. I enjoy analyzing systems, identifying defects, and validating functionality to maintain the highest quality standards. 
               My learning journey has equipped me with a strong foundation in QA methodologies, testing tools, and continuous improvement practices, and I’m always eager to explore new technologies that enhance software quality and performance.
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
              <h3>Test Automation</h3>
              <p>Selenium WebDriver, TestNG, Maven, PageObject Model, Data-Driven Testing</p>
            </div>
            <div className="skill-card card">
              <div className="skill-icon">⚙️</div>
              <h3>Programming</h3>
              <p>Java, JavaScript, Python, PHP, HTML5, CSS3, Tailwind CSS</p>
            </div>
            <div className="skill-card card">
              <div className="skill-icon">🛠️</div>
              <h3>  Technologies</h3>
              <p>React.js, Next.js, Node.js, MySQL, MongoDB, Git, Postman, RESTful APIs</p>
            </div>
          </div>
        </div>
      </section>


{/* Projects & Learning Experience */}
<section className="experience section">
  <h2 className="section-title">Projects & Learning Experience</h2>
  <div className="timeline">

    {/* Academic Projects */}
    <div className="timeline-item">
      <div className="timeline-marker"></div>
      <div className="timeline-content card">
        <h3>Academic Projects – Institute of Technology, University of Moratuwa (ITUM)</h3>
        <h4>Frontend & Backend Development</h4>
        <span className="timeline-date">2023 - Present</span>
        <p>
          Developed multiple academic projects that enhanced both frontend and backend skills.
          Focused on practical implementation using <strong>HTML, CSS, MySQL, and JavaScript</strong>.
          Successfully built the <strong>Web-Based Conference Management System</strong>, a dynamic web application
          featuring user registration, session scheduling, and validation forms.
          These projects strengthened understanding of responsive design, data handling, and system development processes.
        </p>
      </div>
    </div>

    {/* Self-Learning */}
    <div className="timeline-item">
      <div className="timeline-marker"></div>
      <div className="timeline-content card">
        <h3>Self-Learning & Certifications</h3>
        <h4>Continuous Learning & Professional Growth</h4>
        <span className="timeline-date">2022 - Present</span>
        <p>
          Continuously improving knowledge in software testing and automation through self-learning
          and professional certifications. Following the <strong>Automation Certificate Course</strong> at 
          <strong> Developer Stack Institute</strong> and earned the <strong>Postman API Student Expert Certification</strong>.
          Also followed <strong>Open UOM courses</strong> in Software Quality Assurance and Python Programming.
          Gained practical exposure to <strong>Java, Selenium, TestNG, and Maven</strong> for automation testing
          and framework development, further enhancing my QA and development capabilities.
        </p>
      </div>
    </div>

    {/* Final Year Group Project */}
    <div className="timeline-item">
      <div className="timeline-marker"></div>
      <div className="timeline-content card">
        <h3>Final Year Group Project – Smart Garment Production Tracking System</h3>
        <h4>Development & Manual Testing</h4>
        <span className="timeline-date">2025</span>
        <p>
          Collaborated with peers on a comprehensive manufacturing solution using the MERN stack and IoT.
          Contributed to both <strong>system development</strong> and <strong>manual testing</strong> by designing and executing detailed test cases,
          performing API testing, and measuring performance using JMeter.
          This project improved teamwork, analytical thinking, and practical testing experience.
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