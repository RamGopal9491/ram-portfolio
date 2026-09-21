import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiJsonwebtokens } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "Employee Management System",
      description:
        "A full-stack employee management application for managing employee information with CRUD operations through REST APIs.",
      features: [
        "Employee CRUD operations",
        "REST API integration",
        "Employee data management",
        "Responsive React interface",
      ],
      technologies: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
      githubFrontend:
        "https://github.com/RamGopal9491/employee-frontend",
      githubBackend:
        "https://github.com/RamGopal9491/employee-backend",
      live: "#",
    },

    {
      title: "Weather App",
      description:
        "A weather application built with React and Spring Boot that provides weather information with secure JWT-based authentication.",
      features: [
        "Weather information",
        "JWT authentication",
        "REST API integration",
        "Responsive user interface",
      ],
      technologies: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "JWT", icon: <SiJsonwebtokens /> },
      ],
      githubFrontend: "#",
      githubBackend: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-950 text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-blue-400 text-lg font-medium">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Here are some of the projects I have developed using modern
            frontend, backend, database, and authentication technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Project Preview */}
              <div className="h-48 bg-linear-to-br from-blue-950 via-gray-900 to-gray-950 flex items-center justify-center relative overflow-hidden">

                <div className="absolute w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

                <div className="relative text-center">
                  <div className="text-5xl font-bold text-blue-500 mb-3">
                    {index === 0 ? "EMS" : "WA"}
                  </div>

                  <p className="text-gray-400 text-sm">
                    {index === 0
                      ? "Employee Management System"
                      : "Weather Application"}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">

                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-5">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">
                    Key Features
                  </h4>

                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <span className="text-blue-500 mt-1">▹</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-7">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">
                    Technologies
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology, techIndex) => (
                      <span
                        key={techIndex}
                        className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-3 py-2 rounded-lg text-sm text-gray-300 hover:border-blue-500/50 transition"
                      >
                        <span className="text-blue-400">
                          {technology.icon}
                        </span>

                        {technology.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">

                  <a
                    href={project.githubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-4 py-3 rounded-lg text-sm font-semibold transition"
                  >
                    <FaGithub />
                    Frontend
                  </a>

                  <a
                    href={project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-4 py-3 rounded-lg text-sm font-semibold transition"
                  >
                    <FaGithub />
                    Backend
                  </a>

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg text-sm font-semibold transition"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            More projects are coming soon...
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;