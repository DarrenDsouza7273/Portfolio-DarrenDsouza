import React from "react";
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="intro-heading">Hey, I'm Darren Dsouza 👋</h1>
      <p className="intro-text">
        I’m a <strong>Full Stack Web Developer</strong> from
        <em> Panvel, Navi-Mumbai, India</em>, passionate about making the
        internet a better place, one website at a time. I strive to build{" "}
        <strong>scalable and efficient applications</strong> because creating
        robust digital solutions is just as exciting as it sounds!
      </p>

      <h2 className="section-heading">Work Life</h2>
      <p className="section-text">
        I have actively contributed to various <strong>open-source projects</strong>,
        showcasing my <strong>technical expertise and creativity</strong>. Currently,
        I work on the 
        <a 
          href="https://drive.google.com/file/d/1q4y1TkPEDliXBjUgaC3Di9fQhEhAv0M1/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="gdsc-link"
        >
          <strong> Stencil</strong>
        </a> project under
        <em> Samagra Organisation</em>, focusing on enhancing its CLI and NestJS
        services. Additionally, I have contributed to <strong>Meshery</strong> and
        <a 
          href="https://layer5.io/community/members/darren-dsouza"
          target="_blank"
          rel="noopener noreferrer"
          className="gdsc-link">
        <strong> Layer5.io</strong></a>, expanding my knowledge in cloud-native technologies.
      </p>

      <h2 className="section-heading">Leadership & Community Involvement</h2>
      <p className="section-text">
        As the  
        <a 
          href="https://drive.google.com/file/d/1ZSnW9k1UEF2G249UAYb09EiW_Ot37DyM/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="gdsc-link"
        >
          <strong> Technical Lead of GDSC FCRIT</strong>
        </a>, I organized multiple
        <strong> seminars, workshops, and coding competitions</strong>, empowering juniors by
        sharing knowledge and fostering a strong developer community. I am deeply passionate
        about <strong>mentorship and tech education</strong>, ensuring that upcoming developers
        get the guidance they need to excel.
      </p>

      {/* Follow Me Section */}
      <div className="follow-me">
        <p className="follow-text">/&gt; Follow me</p>
        <p className="email">📩 darrendsouza7273@gmail.com</p>
      </div>
    </div>
  );
};

export default Home;
