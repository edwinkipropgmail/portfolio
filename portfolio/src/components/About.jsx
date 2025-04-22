import "../styles/about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I'm <strong>Kiprop Edwin</strong>, a Junior Frontend Developer with a
          background in Physics from Meru University of Science and Technology.
          I’m passionate about clean UI/UX, writing code that works, and solving
          real-world problems through the web.
        </p>
        <p>
          When I'm not coding, I'm mentoring my siblings, watching football
          matches, or building something new with React. I love exploring new
          technologies and continuously improving my skills. I also believe in
          the power of collaboration and enjoy working with others to create
          innovative solutions.
        </p>
        <a
          href="portfolio/public/cv.pdf"
          download
          className="download-btn"
          style={{
            padding: "10px 20px",
            backgroundColor: "#1f1f1f",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            display: "inline-block",
            marginTop: "1rem",
            transition: "0.3s",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#333")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#1f1f1f")}
        >
          📄 Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
