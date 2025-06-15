import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Scroll-spy to highlight active section
  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'contact'];

    const handleScroll = () => {
      let current = 'home';
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 80) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="#home" onClick={closeMenu}>
            <h2>My Profile</h2>
          </a>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a
            href="#home"
            className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className={`navbar-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
