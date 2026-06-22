import "./Contact.css";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <h2>Contact</h2>
        <p>Let's connect and build something amazing together.</p>
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <h2>Let's Work Together</h2>

          <p>
            I'm currently looking for internship and software development
            opportunities. Feel free to connect with me.
          </p>

          <div className="contact-links">
            <a
              href="https://github.com/CodeByDeepak01"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/deepak-18b74a310"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/CodeByDeepak/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <TbBrandLeetcode />
              LeetCode
            </a>

            <a href="mailto:deepakpal789557@gmail.com" className="contact-link">
              <FaEnvelope />
              Email
            </a>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Your Email" />

            <textarea rows="6" placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
