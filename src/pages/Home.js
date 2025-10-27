import { Link } from 'react-router-dom';
import './Home.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section id ="home" className="hero">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-title">
              Hi, I'm <span className="text-primary animated-name">Dilmi Sooriyaarachchi</span>
            </h1>
            <h2 className="hero-subtitle">Quality assurance</h2>
            <p className="hero-description">
              I’m passionate about software quality and user satisfaction.
              Exploring modern QA tools and testing methods to ensure every product performs flawlessly.
            </p>
            <div className="hero-buttons">
                <a href="#projects" className="btn btn-white">
                 View My Work
                </a>
                <a href="#contact" className="btn btn-white-outline">
                 Get In Touch
                </a>
            </div>

          </div>
          <div className="hero-image fade-in">
            <div className="profile-placeholder">
              <img 
                src="/images/Profile.jpg"
                alt="Profile" 
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </section>
      
      <About/>
      <Projects/>
      <Contact/>
      {/* Footer */}
    </div>
  );
};

export default Home;