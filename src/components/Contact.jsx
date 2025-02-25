import React from "react";
import "./Contact.css"; // Ensure CSS is linked

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact 📧</h2>
      <p>Feel free to reach out to me via any of the following platforms:</p>

      <div className="contact-info">
        <div className="contact-item">
          <strong>Email:</strong> <a href="mailto:darrendsouza7273@gmail.com">darrendsouza7273@gmail.com</a>
        </div>

        <div className="contact-item">
          <strong>GitHub:</strong> <a href="https://github.com/DarrenDsouza7273" target="_blank" rel="noopener noreferrer">github.com/darrendsouza</a>
        </div>

        <div className="contact-item">
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/darrendsouza7273/" target="_blank" rel="noopener noreferrer">linkedin.com/in/darrendsouza7273/</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
