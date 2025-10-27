import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      <div className="container">
        {/* Contact Hero */}
        <section id="contact" className="contact-hero section">
          <h1 className="section-title fade-in-up">Get In Touch</h1>
          <p className="contact-subtitle fade-in-up">
            I'd love to hear from you! Whether you have a project in mind, 
            a question, or just want to say hello, feel free to reach out.
          </p>
        </section>

        {/* Contact Content */}
        <section className="contact-content section">
          <div className="contact-wrapper grid grid-2">
            {/* Contact Info */}
            <div className="contact-info fade-in-up">
              <h2>Let's Connect</h2>
              <p>
                I'm always interested in hearing about new opportunities, 
                exciting projects, and interesting people. Let's start a conversation!
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <a href="mailto:dilmihirunika2001@gmail.com">dilmihirunika2001@gmail.com</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">💼</div>
                  <div className="contact-details">
                    <h4>LinkedIn</h4>
                    <a href="www.linkedin.com/in/dilmi-sooriyaarachchi-10a708305" target="_blank" rel="noopener noreferrer">
                      www.linkedin.com/in/dilmi-sooriyaarachchi-10a708305/
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">💻</div>
                  <div className="contact-details">
                    <h4>GitHub</h4>
                    <a href="https://github.com/dilmi1108" target="_blank" rel="noopener noreferrer">
                      https://github.com/dilmi1108
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">📱</div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <a href="tel:+94 703038659">0703038659</a>
                  </div>
                </div>
              </div>

              <div className="availability">
                <h3>Current Availability</h3>
                <div className="availability-status">
                  <span className="status-indicator available"></span>
                  <span>Available for new projects</span>
                </div>
                <p>I'm currently looking for new opportunities and interesting projects to work on.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container fade-in-up">
              <div className="form-card card">
                {isSubmitted ? (
                  <div className="success-message">
                    <div className="success-icon">✅</div>
                    <h3>Message Sent Successfully!</h3>
                    <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    <button 
                      className="btn" 
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <h3>Send me a message</h3>
                    
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'error' : ''}
                        placeholder="Your full name"
                      />
                      {errors.name && <span className="error-message">{errors.name}</span>}
                      
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <span className="error-message">{errors.email}</span>}
                      
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={errors.subject ? 'error' : ''}
                        placeholder="What's this about?"
                      />
                      {errors.subject && <span className="error-message">{errors.subject}</span>}
                      
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'error' : ''}
                        placeholder="Tell me about your project or inquiry..."
                      ></textarea>
                      {errors.message && <span className="error-message">{errors.message}</span>}
                      
                    </div>

                    <button 
                      type="submit" 
                      className={`btn submit-btn ${isSubmitting ? 'loading' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;