import colorSharp from "../assets/img/color-sharp.png";

export const Projects = () => {
  const projectList = [
    {
      title: "GarmentPulse IoT",
      description: "An industrial IoT tracking system powered by ESP-32 microcontrollers and hardware sensors paired with a PHP/SQL web dashboard to monitor sewing machine operator efficiency and streamline garment factory floor analytics.",
      tech: "ESP-32, PHP, SQL, IoT Sensors",
      link: "#"
    },
    {
      title: "LegalAI",
      description: "A full-stack web application integrated with the Gemini AI API and a subscription tier designed to answer queries regarding the Sri Lankan legal landscape.",
      tech: "MongoDB, Express, React, Node, Gemini API",
      link: "#"
    },
    {
      title: "Garbage Spotting & Collecting System",
      description: "A community-focused mapping platform utilizing the Google Maps API, PHP, and SQL to coordinate city cleanup operations and optimize team dispatch routes.",
      tech: "Google Maps API, PHP, SQL",
      link: "#"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <p>Explore some of my core full-stack, IoT, and system projects.</p>
        
        <div className="project-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-tech">{project.tech}</span>
            </div>
          ))}
        </div>
      </div>

      <img className="background-img-left" src={colorSharp} alt="" />
    </section>
  );
};