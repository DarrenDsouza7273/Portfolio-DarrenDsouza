import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Shieldify",
    description:
      "HSE Shieldify is an AI-powered safety system designed to detect and alert unsafe situations in workplaces by verifying employee compliance with required PPE.",
    technologies:
      "React, Chakra UI, Node.js, MongoDB, Express.js, Python, React Native, Yolov8, RTSP Protocol, FFmpeg",
  },
  {
    title: "GeoGuard",
    description:
      "GeoGuard leverages private cameras in businesses and institutions to enhance public safety by helping law enforcement access relevant video footage during investigations.",
    technologies: "React, Firebase, CSS, NodeJs, Google Maps API, GCP, YOLOv8",
  },
];

const openSource = [
  {
    title: "Stencil",
    description:
      "Stencil is an opinionated backend framework based on NestJS, built for Developer Experience and Productivity.",
    technologies: "NestJS, Docker, Prisma, TypeScript",
  },
  {
    title: "AsyncAPI",
    description:
      "AsyncAPI seeks to improve the current state of Event-Driven Architectures (EDAs) and the tooling system around them.",
    technologies: "API, TypeScript, Python",
  },
  {
    title: "Layer5 & Meshery",
    description:
      "Meshery is an extensible, self-service engineering platform for the collaborative management of cloud and cloud-native infrastructure.",
    technologies: "Cloud, JavaScript, TypeScript, Docker, Makefile",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>

      <section>
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Open Source Contributions</h2>
        {openSource.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
