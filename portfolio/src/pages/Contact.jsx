import "../styles/contact.css";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>
        If you’d like to work together or just say hello, feel free to drop a
        message!
      </p>

      <form
        className="contact-form"
        action="https://formsubmit.co/kipropedwin178@gmail.com"
        method="POST"
        onSubmit={() => setSubmitted(true)}
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      {submitted && (
        <div className="thank-you-message">
          <p>Thank you for your message! I'll get back to you soon.</p>
        </div>
      )}
      <div className="button">
        {" "}
        <button onClick={() => window.location.href = 'mailto:kipropedwin178@gmail.com'}
          className="hire-btn"
        >
          ✉️ Hire Me
        </button>
      </div>
    </section>
  );
};

export default Contact;
