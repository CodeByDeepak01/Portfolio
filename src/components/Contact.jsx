import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-left">
          <h2>Let's Work Together</h2>

          <p>
            I'm currently looking for internship and
            software development opportunities.
            Feel free to connect with me.
          </p>
        </div>

        <div className="contact-right">

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;