import '../styles/project.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Food Recipe Website</h3>
          <p>
            A dynamic Food Recipe App built with Vite + React. It features a responsive design and a user-friendly interface.
            Users can search for recipes, view details, and save their favorites. The app is designed to be fast and efficient, providing a seamless experience.
            <br />
            The app allows users to explore a wide variety of recipes, filter them based on their preferences, and save their favorite recipes for easy access later.
            <br />
            
          </p>
          <a href="https://hotel-application-d76ed.web.app" target="_blank" rel="noopener noreferrer">
            View Live
          </a>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            My personal portfolio built with React and pure CSS. Responsive and clean design.
            <br />
            This portfolio showcases my skills, projects, and experience as a Junior Frontend Developer. It is designed to be user-friendly and visually appealing, making it easy for potential employers to navigate and learn more about me.
            <br />
            The website is fully responsive, ensuring a seamless experience across all devices. It features sections for my projects, skills, and contact information, allowing visitors to get in touch with me easily.
            <br />
          </p>
          <a href="#">Live Soon</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
