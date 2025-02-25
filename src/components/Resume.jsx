import React from "react";
import "./Resume.css"; // Ensure CSS is linked

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>Resume</h2>

      <div className="resume-section">
        <h3>🎓 Education</h3>
        <div className="resume-item">
          <strong>Fr. Conceicao Rodrigues Institute of Technology</strong>
          <p>Bachelor of Technology in Computer Science</p>
          <p>December 2021 - May 2025 | Vashi, Navi Mumbai, India</p>
        </div>
      </div>

      <div className="resume-section">
        <h3>🤝 Volunteering</h3>
        <div className="resume-item">
        <a 
          href="https://drive.google.com/file/d/1ZSnW9k1UEF2G249UAYb09EiW_Ot37DyM/view"
          target="_blank"
          rel="noopener noreferrer"
          className="gdsc-link">
          <strong>GDSC FCRIT</strong></a>
          <p>Technical Lead</p>
          <p>September 2023 - June 2024 | Vashi, Navi Mumbai, India</p>
          <p>Organized multiple workshops and conducted a coding contest to help students improve their problem-solving skills and technical knowledge.</p>
        </div>
      </div>

      <div className="resume-section">
        <h3>💼 Work Experience</h3>
        <div className="resume-item">
        <a 
          href="https://drive.google.com/file/d/1q4y1TkPEDliXBjUgaC3Di9fQhEhAv0M1/view"
          target="_blank"
          rel="noopener noreferrer"
          className="gdsc-link">
          <strong>SamagraX</strong></a>
          <p>Open Source Intern</p>
          <p>June 2024 - September 2024 | Remote</p>
          <p><strong>Technologies:</strong> TypeScript, NestJS, Docker, Prisma, Grafana, LLM, Bun Package Manager</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
