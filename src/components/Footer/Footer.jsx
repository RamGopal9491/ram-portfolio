import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-white">

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold">
              Ram Gopal<span className="text-blue-500">.</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Cloud-focused full-stack developer passionate about building
              modern web applications and learning cloud technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["Home", "home"],
                ["About", "about"],
                ["Skills", "skills"],
                ["Projects", "projects"],
                ["Certifications", "certifications"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Connect With Me
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/RamGopal9491"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:ramgopalbandaru999@gmail.com"
                aria-label="Email"
                className="w-11 h-11 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition"
              >
                <FaEnvelope />
              </a>

            </div>

            <p className="text-gray-500 text-sm mt-5">
              Let's build something amazing together.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Ram Gopal Bandaru. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
            >
              Back to Top
              <FaArrowUp />
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;