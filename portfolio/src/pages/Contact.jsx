import "../styles/contact.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    emailjs
      .sendForm("service_8d0f6ko", "template_6juwa6o", form.current, {
        publicKey: "Zxquptxz0rUg5e8xM",
      })
      .then(() => {
        setShowPopup(true);
        form.current.reset();

        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      })
      .catch((error) => {
        alert("FAILED...", error.text);
      });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>
        If you’d like to work together or just say hello, feel free to drop a
        message!
      </p>

      <form ref={form} onSubmit={sendEmail}>
        <div className="name-email">
          <input
            className="named"
            type="text"
            name="user_name"
            placeholder="Enter your Name"
            required
          />
          <input
            className="namedmail"
            type="email"
            name="user_email"
            placeholder="Enter your Email"
            required
          />
        </div>
        <textarea
          name="message"
          rows={5}
          placeholder="Write your message here!"
          required
        />
        <input className="subbmit" type="submit" value="Send" />
      </form>

      {/* ✅ Popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "#4BB543",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            zIndex: 9999,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          ✅ Message sent successfully!
        </div>
      )}

      <div className="button">
        <button
          onClick={() =>
            (window.location.href = "mailto:kipropedwin178@gmail.com")
          }
          className="hire-btn"
        >
          ✉️ Hire Me
        </button>
      </div>
    </section>
  );
};

export default Contact;
