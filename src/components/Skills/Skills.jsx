import React from "react";
import {
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaCss3Alt,
  FaDatabase,
  FaCode,
  FaServer,
  FaCloud,
} from "react-icons/fa";

import {
  SiC,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiExpress,
  SiHtml5,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "C", icon: <SiC /> },
      ],
    },

    {
      title: "Frontend Technologies",
      icon: <FaReact />,
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },

    {
      title: "Backend Technologies",
      icon: <FaServer />,
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
      ],
    },

    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
    },

    {
      title: "Cloud & DevOps",
      icon: <FaCloud />,
      skills: [
        { name: "AWS", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> },
      ],
    },

    {
      title: "Version Control",
      icon: <FaGithub />,
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
      ],
    },
  ];

  const coreConcepts = [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Artificial Intelligence",
    "REST APIs",
    "Object-Oriented Programming",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-950 text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-blue-400 text-lg font-medium">
            My Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Technical <span className="text-blue-500">Skills</span>
          </h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Technologies and concepts I use to build modern web applications
            and work with cloud-based solutions.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">

                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-xl group-hover:bg-blue-500 group-hover:text-white transition duration-300">
                  {category.icon}
                </div>

                <h3 className="text-lg font-bold">
                  {category.title}
                </h3>

              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 bg-gray-800/70 border border-gray-700 rounded-lg px-3 py-3 hover:border-blue-500/50 hover:bg-gray-800 transition duration-300"
                  >
                    <span className="text-blue-400 text-lg">
                      {skill.icon}
                    </span>

                    <span className="text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Core Concepts */}
        <div className="mt-10 bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-blue-500/40 transition duration-300">

          <div className="flex items-center gap-4 mb-6">

            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center text-xl">
              <FaCode />
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Core Concepts
              </h3>

              <p className="text-gray-500 text-sm">
                Computer science fundamentals
              </p>
            </div>

          </div>

          <div className="flex flex-wrap gap-3">
            {coreConcepts.map((concept, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 hover:text-blue-400 hover:border-blue-500/50 transition duration-300"
              >
                {concept}
              </span>
            ))}
          </div>

        </div>

        {/* Skill Summary */}
        <div className="grid sm:grid-cols-3 gap-5 mt-10">

          <div className="text-center bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-500">
              15+
            </div>
            <p className="text-gray-400 mt-2">
              Technologies
            </p>
          </div>

          <div className="text-center bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-500">
              3
            </div>
            <p className="text-gray-400 mt-2">
              Development Areas
            </p>
          </div>

          <div className="text-center bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-500">
              Full-Stack
            </div>
            <p className="text-gray-400 mt-2">
              Development Focus
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;