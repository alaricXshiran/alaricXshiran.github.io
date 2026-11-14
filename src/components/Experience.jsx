import { experience } from "../data";
import { stagger } from "../reveal";

export const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <h2 data-reveal="">Experience</h2>
        <p className="section-lead" data-reveal="">
          Where I&apos;ve worked and what I did there.
        </p>

        <div className="timeline">
          {experience.map((job, i) => (
            <article
              className="timeline-item"
              key={job.role + job.company}
              {...stagger(i, 120, 99)}
            >
              <div className="timeline-head">
                <div>
                  <h3>{job.role}</h3>
                  <span className="timeline-company">{job.company}</span>
                </div>
                {job.period && (
                  <span className="timeline-period">{job.period}</span>
                )}
              </div>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="chips">
                {job.tech.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
