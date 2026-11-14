import { Github, BoxArrowUpRight } from "react-bootstrap-icons";
import colorSharp from "../assets/img/color-sharp.webp";
import { projects, profile } from "../data";
import { stagger } from "../reveal";

export const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 data-reveal="">Projects</h2>
        <p className="section-lead" data-reveal="">
          Backend APIs, full stack web apps and embedded devices I&apos;ve
          built.
        </p>

        <div className="project-grid">
          {projects.map((project, i) => (
            <article
              className="project-card"
              key={project.title}
              {...stagger(i)}
            >
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="chips">
                {project.tech.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              {(project.code || project.demo) && (
                <div className="project-links">
                  {project.code && (
                    <a href={project.code} target="_blank" rel="noreferrer">
                      <Github /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <BoxArrowUpRight /> Live demo
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="section-cta" data-reveal="">
          <a
            className="outline-btn"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github /> More on GitHub
          </a>
        </div>
      </div>

      <img className="background-img-left" src={colorSharp} alt="" loading="lazy" />
    </section>
  );
};
