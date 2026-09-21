import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaCloud,
  FaCode,
} from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen
        bg-gray-950
        text-white
        flex
        items-center
        px-6
        pt-32
        pb-20
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div>

            {/* Small Heading */}
            <div className="flex items-center gap-3 mb-5">

              <span className="w-10 h-0.5 bg-blue-500"></span>

              <p className="text-blue-400 font-medium tracking-wide">
                Hello, I'm
              </p>

            </div>

            {/* Name */}
            <h1 className="
              text-5xl
              sm:text-6xl
              lg:text-7xl
              font-bold
              leading-tight
            ">
              Ram Gopal
              <br />

              <span className="text-blue-500">
                Bandaru
              </span>
            </h1>

            {/* Role */}
            <h2 className="
              text-2xl
              sm:text-3xl
              font-semibold
              text-gray-300
              mt-6
            ">
              Cloud-Focused{" "}
              <span className="text-blue-400">
                Full-Stack Developer
              </span>
            </h2>

            {/* Description */}
            <p className="
              text-gray-400
              text-lg
              leading-8
              mt-6
              max-w-xl
            ">
              I am a B.Tech Computer Science and Engineering student
              passionate about building modern web applications and
              exploring cloud computing and DevOps technologies.
            </p>

            {/* Buttons */}
            <div className="
              flex
              flex-wrap
              gap-4
              mt-8
            ">

              {/* Projects */}
              <a
                href="#projects"
                className="
                  flex
                  items-center
                  gap-2
                  bg-blue-600
                  hover:bg-blue-700
                  px-6
                  py-3
                  rounded-lg
                  font-semibold
                  transition
                  duration-300
                  hover:-translate-y-1
                "
              >
                View Projects
                <FaArrowRight />
              </a>

              {/* Resume */}
              <a
                href="/Ram-Gopal-Bandaru-Resume.pdf"
                download
                className="
                  flex
                  items-center
                  gap-2
                  border
                  border-gray-700
                  hover:border-blue-500
                  hover:text-blue-400
                  px-6
                  py-3
                  rounded-lg
                  font-semibold
                  transition
                  duration-300
                  hover:-translate-y-1
                "
              >
                Download Resume
                <FaDownload />
              </a>

            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">

              {/* GitHub */}
              <a
                href="https://github.com/RamGopal9491"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  w-11
                  h-11
                  rounded-lg
                  border
                  border-gray-800
                  bg-gray-900
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  text-xl
                  hover:text-white
                  hover:border-blue-500
                  hover:-translate-y-1
                  transition
                "
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  w-11
                  h-11
                  rounded-lg
                  border
                  border-gray-800
                  bg-gray-900
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  text-xl
                  hover:text-blue-500
                  hover:border-blue-500
                  hover:-translate-y-1
                  transition
                "
              >
                <FaLinkedin />
              </a>

              {/* Email */}
              <a
                href="mailto:ramgopalbandaru999@gmail.com"
                aria-label="Email"
                className="
                  w-11
                  h-11
                  rounded-lg
                  border
                  border-gray-800
                  bg-gray-900
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  text-xl
                  hover:text-red-400
                  hover:border-red-400
                  hover:-translate-y-1
                  transition
                "
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* Outer Glow */}
              <div className="
                absolute
                inset-0
                bg-blue-600/10
                blur-3xl
                rounded-full
              "></div>

              {/* Main Card */}
              <div className="
                relative
                w-75
                sm:w-90
                h-95
                sm:h-107.5
                rounded-3xl
                bg-gray-900
                border
                border-gray-800
                shadow-2xl
                flex
                items-center
                justify-center
                overflow-hidden
              ">

                {/* Top Gradient */}
                <div className="
                  absolute
                  top-0
                  left-0
                  right-0
                  h-32
                  bg-linear-to-b
                  from-blue-600/20
                  to-transparent
                "></div>

                {/* Developer Icon */}
                <div className="text-center relative">

                  <div className="
                    w-32
                    h-32
                    mx-auto
                    rounded-full
                    bg-blue-500/10
                    border
                    border-blue-500/30
                    flex
                    items-center
                    justify-center
                    text-blue-400
                    text-5xl
                    mb-7
                  ">
                    <FaCode />
                  </div>

                  <h3 className="
                    text-2xl
                    font-bold
                  ">
                    Full-Stack
                  </h3>

                  <p className="
                    text-blue-400
                    font-medium
                    mt-2
                  ">
                    Developer
                  </p>

                  <div className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-gray-400
                    mt-5
                  ">
                    <FaCloud className="text-blue-400" />
                    <span>
                      Cloud & DevOps
                    </span>
                  </div>

                </div>

                {/* Decorative Circle */}
                <div className="
                  absolute
                  -bottom-24
                  -right-24
                  w-48
                  h-48
                  rounded-full
                  border
                  border-blue-500/20
                "></div>

                <div className="
                  absolute
                  -top-20
                  -left-20
                  w-40
                  h-40
                  rounded-full
                  border
                  border-blue-500/10
                "></div>

              </div>

              {/* Floating Badge */}
              <div className="
                absolute
                -bottom-5
                -left-5
                bg-gray-900
                border
                border-gray-800
                rounded-xl
                px-5
                py-3
                shadow-xl
              ">
                <p className="text-xs text-gray-500">
                  Currently
                </p>

                <p className="
                  text-sm
                  text-blue-400
                  font-semibold
                ">
                  Building & Learning
                </p>
              </div>

              {/* Floating Badge */}
              <div className="
                absolute
                -top-5
                -right-5
                bg-gray-900
                border
                border-gray-800
                rounded-xl
                px-5
                py-3
                shadow-xl
              ">
                <p className="
                  text-sm
                  text-gray-300
                  font-semibold
                ">
                  React + Spring Boot
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="
          flex
          justify-center
          mt-16
          lg:mt-20
        ">
          <a
            href="#about"
            className="
              text-gray-500
              hover:text-blue-400
              transition
              text-sm
              flex
              flex-col
              items-center
              gap-2
            "
          >
            <span>
              Scroll to explore
            </span>

            <span className="animate-bounce">
              ↓
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Home;