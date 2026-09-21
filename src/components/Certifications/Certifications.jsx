import React from "react";
import {
  FaAws,
  FaCertificate,
  FaExternalLinkAlt,
  FaAward,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Certifications = () => {
  const certifications = [
    {
      title: "MongoDB Certified DBA",
      organization: "MongoDB",
      year: "2024",
      icon: <SiMongodb />,
      credential:
        "https://www.credly.com/badges/bf2be76a-b351-4fc8-8a61-33ff452081e1/public_url",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services",
      year: "2024",
      icon: <FaAws />,
      credential:
        "https://www.credly.com/badges/ff28123d-c07a-458c-b9e2-8b922919f81b/public_url",
    },
    {
      title: "AWS Certified Developer - Associate",
      organization: "Amazon Web Services",
      year: "2024",
      icon: <FaAws />,
      credential:
        "https://www.credly.com/badges/89cfd947-7558-48e6-954a-44f4733db2e4/public_url",
    },
  ];

  return (
    <section
      id="certifications"
      className="min-h-screen bg-gray-950 text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-400 text-lg font-medium">
            My Achievements
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            My <span className="text-blue-500">Certifications</span>
          </h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Professional certifications that demonstrate my knowledge in
            cloud computing and database technologies.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-7 overflow-hidden hover:border-blue-500/60 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition"></div>

              {/* Certificate Icon */}
              <div className="relative flex justify-between items-start mb-7">

                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-3xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition duration-300">
                  {certification.icon}
                </div>

                <FaAward className="text-2xl text-gray-700 group-hover:text-blue-500 transition" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold leading-7 mb-4 group-hover:text-blue-400 transition">
                {certification.title}
              </h3>

              {/* Organization */}
              <div className="flex items-center gap-2 text-gray-400 mb-3">
                <FaCertificate className="text-blue-400" />
                <span>{certification.organization}</span>
              </div>

              {/* Year */}
              <p className="text-gray-500 text-sm mb-7">
                Issued: {certification.year}
              </p>

              {/* Button */}
              <a
                href={certification.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition duration-300"
              >
                View Credential
                <FaExternalLinkAlt className="text-sm" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-12 bg-gray-900 border border-gray-800 rounded-2xl p-7 text-center">
          <FaCertificate className="text-3xl text-blue-500 mx-auto mb-4" />

          <h3 className="text-xl font-bold">
            Continuous Learning
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto mt-2 leading-7">
            I continuously improve my technical skills by learning new
            technologies and working toward industry-recognized
            certifications.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Certifications;