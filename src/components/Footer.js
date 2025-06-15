import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>My Profile</h3>
            <p>Full Stack Developer passionate about creating amazing web experiences.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com/dilmi1108" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="www.linkedin.com/in/dilmi-sooriyaarachchi-10a708305" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="dilmihirunika2001@gmail.com">
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} My Profile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;