import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/90 backdrop-blur-lg border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Navbar Main */}
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#home"
            onClick={handleLinkClick}
            className="group flex flex-col leading-none"
          >
            <span className="text-xl md:text-2xl font-bold text-white">
              Ram Gopal
              <span className="text-blue-500">.</span>
            </span>

            <span className="text-[10px] md:text-xs text-gray-500 mt-1 tracking-wider">
              FULL-STACK DEVELOPER
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative
                  text-gray-300
                  hover:text-blue-400
                  text-sm
                  font-medium
                  transition
                  duration-300
                  py-2
                  group
                "
              >
                {link.name}

                {/* Underline */}
                <span
                  className="
                    absolute
                    left-0
                    bottom-0
                    w-0
                    h-0.5
                    bg-blue-500
                    group-hover:w-full
                    transition-all
                    duration-300
                  "
                ></span>
              </a>
            ))}

          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">

            {/* GitHub */}
            <a
              href="https://github.com/RamGopal9491"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                w-9
                h-9
                flex
                items-center
                justify-center
                rounded-lg
                text-gray-400
                hover:text-white
                hover:bg-gray-800
                transition
                duration-300
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
                w-9
                h-9
                flex
                items-center
                justify-center
                rounded-lg
                text-gray-400
                hover:text-blue-500
                hover:bg-gray-800
                transition
                duration-300
              "
            >
              <FaLinkedin />
            </a>

            {/* Email */}
            <a
              href="mailto:ramgopalbandaru999@gmail.com"
              aria-label="Email"
              className="
                w-9
                h-9
                flex
                items-center
                justify-center
                rounded-lg
                text-gray-400
                hover:text-red-400
                hover:bg-gray-800
                transition
                duration-300
              "
            >
              <FaEnvelope />
            </a>

            {/* Resume */}
            <a
              href="/Ram-Gopal-Bandaru-Resume.pdf"
              download
              className="
                ml-2
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-lg
                border
                border-blue-500
                text-blue-400
                hover:bg-blue-500
                hover:text-white
                transition
                duration-300
                text-sm
                font-medium
              "
            >
              <FaDownload />
              Resume
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              lg:hidden
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-lg
              text-gray-300
              hover:text-blue-400
              hover:bg-gray-800
              transition
              duration-300
            "
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            ${
              isOpen
                ? "max-h-125 opacity-100 pb-6"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div className="border-t border-gray-800 pt-5">

            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-1">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="
                    px-4
                    py-3
                    rounded-lg
                    text-gray-300
                    hover:text-blue-400
                    hover:bg-gray-900
                    transition
                    duration-300
                    font-medium
                  "
                >
                  {link.name}
                </a>
              ))}

            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center gap-3 mt-5 px-4">

              {/* GitHub */}
              <a
                href="https://github.com/RamGopal9491"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  bg-gray-900
                  border
                  border-gray-800
                  text-gray-400
                  hover:text-white
                  hover:border-blue-500
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
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  bg-gray-900
                  border
                  border-gray-800
                  text-gray-400
                  hover:text-blue-500
                  hover:border-blue-500
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
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  bg-gray-900
                  border
                  border-gray-800
                  text-gray-400
                  hover:text-red-400
                  hover:border-red-400
                  transition
                "
              >
                <FaEnvelope />
              </a>

              {/* Mobile Resume */}
              <a
                href="/Ram-Gopal-Bandaru-Resume.pdf"
                download
                className="
                  ml-auto
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-lg
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  text-sm
                  font-medium
                  transition
                "
              >
                <FaDownload />
                Resume
              </a>

            </div>

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;