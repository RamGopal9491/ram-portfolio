import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        {
          publicKey: "YOUR_PUBLIC_KEY",
        }
      );

      setStatus("success");
      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-950 text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-400 text-lg font-medium">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Contact <span className="text-blue-500">Me</span>
          </h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Have a project, opportunity, or question? Feel free to send me
            a message. I would be happy to connect.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-3">
              Let's Connect
            </h3>

            <p className="text-gray-400 leading-7 mb-8">
              I am open to discussing full-stack development, cloud
              computing, software projects, internships, and career
              opportunities.
            </p>

            {/* Email */}
            <a
              href="mailto:ramgopalbandaru999@gmail.com"
              className="flex items-center gap-4 p-4 bg-gray-800/70 rounded-xl mb-4 hover:bg-gray-800 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <FaEnvelope className="text-blue-400 text-xl" />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Email
                </p>

                <p className="text-gray-300 break-all">
                  ramgopalbandaru999@gmail.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 bg-gray-800/70 rounded-xl mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <FaMapMarkerAlt className="text-blue-400 text-xl" />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Location
                </p>

                <p className="text-gray-300">
                  Vijayawada, Andhra Pradesh
                </p>
              </div>
            </div>

            {/* Social Links */}
            <h4 className="text-lg font-semibold mb-4">
              Find Me Online
            </h4>

            <div className="flex gap-4">

              <a
                href="https://github.com/RamGopal9491"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href="mailto:ramgopalbandaru999@gmail.com"
                className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">

            <h3 className="text-2xl font-bold mb-6">
              Send Me a Message
            </h3>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition resize-none"
                ></textarea>
              </div>

              {/* Status */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-green-400 bg-green-500/10 border border-green-500/20 rounded-xl p-3">
                  <FaCheckCircle />
                  <span>
                    Message sent successfully!
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                  <FaExclamationCircle />
                  <span>
                    Failed to send message. Please try again.
                  </span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-900 disabled:cursor-not-allowed px-6 py-3.5 rounded-xl font-semibold transition"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;