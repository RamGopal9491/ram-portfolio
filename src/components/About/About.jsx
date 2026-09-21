import React from "react";
import {
  FaGraduationCap,
  FaUniversity,
  FaMapMarkerAlt,
  FaCode,
  FaCloud,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-950 text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-blue-400 text-lg font-medium">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            About <span className="text-blue-500">Me</span>
          </h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/40 transition duration-300">

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <FaCode className="text-2xl text-blue-400" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    Who I Am
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Full-Stack Developer
                  </p>
                </div>
              </div>

              <p className="text-gray-400 leading-8 mb-5">
                I am a Computer Science and Engineering student passionate
                about building modern web applications and learning cloud
                technologies.
              </p>

              <p className="text-gray-400 leading-8 mb-5">
                I enjoy working with both frontend and backend technologies,
                developing responsive user interfaces, building REST APIs,
                and working with databases.
              </p>

              <p className="text-gray-400 leading-8">
                My current interests include full-stack development, cloud
                computing, AWS, DevOps, and continuously improving my
                problem-solving and development skills.
              </p>

              {/* Cloud Focus */}
              <div className="mt-7 flex items-center gap-3 text-blue-400">
                <FaCloud />
                <span className="font-medium">
                  Cloud & Full-Stack Development
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Quick Info */}
          <div className="grid sm:grid-cols-2 gap-5">

            {/* Degree */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 hover:-translate-y-1 transition duration-300">
              <FaGraduationCap className="text-3xl text-blue-400 mb-4" />

              <p className="text-gray-500 text-sm mb-1">
                Degree
              </p>

              <h3 className="text-lg font-bold">
                B.Tech CSE
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                2023 – 2027
              </p>
            </div>

            {/* University */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 hover:-translate-y-1 transition duration-300">
              <FaUniversity className="text-3xl text-blue-400 mb-4" />

              <p className="text-gray-500 text-sm mb-1">
                University
              </p>

              <h3 className="text-lg font-bold">
                KLEF
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Vijayawada
              </p>
            </div>

            {/* CGPA */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 hover:-translate-y-1 transition duration-300">
              <div className="text-3xl text-blue-400 mb-4 font-bold">
                8.78
              </div>

              <p className="text-gray-500 text-sm mb-1">
                Current CGPA
              </p>

              <h3 className="text-lg font-bold">
                Academic Performance
              </h3>
            </div>

            {/* Location */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 hover:-translate-y-1 transition duration-300">
              <FaMapMarkerAlt className="text-3xl text-blue-400 mb-4" />

              <p className="text-gray-500 text-sm mb-1">
                Location
              </p>

              <h3 className="text-lg font-bold">
                Vijayawada
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Andhra Pradesh, India
              </p>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-20">

          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold">
              My <span className="text-blue-500">Education</span>
            </h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">

            {/* B.Tech */}
            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-7 hover:border-blue-500/50 transition duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FaGraduationCap className="text-blue-400" />

                    <h4 className="text-xl font-bold">
                      B.Tech – Computer Science and Engineering
                    </h4>
                  </div>

                  <p className="text-gray-400">
                    Koneru Lakshmaiah Education Foundation (KLEF)
                  </p>

                  <p className="text-gray-500 mt-1">
                    Vijayawada, Andhra Pradesh
                  </p>
                </div>

                <div className="text-left md:text-right">
                  <span className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                    2023 – 2027
                  </span>

                  <p className="text-gray-400 mt-2">
                    CGPA: 8.78
                  </p>
                </div>

              </div>
            </div>

            {/* Intermediate */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-7 hover:border-blue-500/50 transition duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FaGraduationCap className="text-blue-400" />

                    <h4 className="text-xl font-bold">
                      Intermediate – MPC
                    </h4>
                  </div>

                  <p className="text-gray-400">
                    Aditya Junior College
                  </p>

                  <p className="text-gray-500 mt-1">
                    Rajamahendravaram
                  </p>
                </div>

                <div className="text-left md:text-right">
                  <span className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                    2021 – 2023
                  </span>

                  <p className="text-gray-400 mt-2">
                    Percentage: 71%
                  </p>
                </div>

              </div>
            </div>

            {/* School */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-7 hover:border-blue-500/50 transition duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FaGraduationCap className="text-blue-400" />

                    <h4 className="text-xl font-bold">
                      Secondary School
                    </h4>
                  </div>

                  <p className="text-gray-400">
                    Bhashyam High School
                  </p>

                  <p className="text-gray-500 mt-1">
                    Rajamahendravaram
                  </p>
                </div>

                <div className="text-left md:text-right">
                  <span className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                    2020 – 2021
                  </span>

                  <p className="text-gray-400 mt-2">
                    Percentage: 94%
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;