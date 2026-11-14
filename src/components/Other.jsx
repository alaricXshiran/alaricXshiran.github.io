import colorSharp2 from "../assets/img/color-sharp2.webp";
import { education, languages, interests, strengths } from "../data";

export const Other = () => {
  return (
    <section className="section other" id="about">
      <div className="container">
        <h2>About Me</h2>
        <p className="section-lead">
          Education, languages and what I do away from work.
        </p>

        <div className="other-grid">
          <div className="other-card">
            <h3>Education</h3>
            {education.map(({ title, detail }) => (
              <div className="other-entry" key={title}>
                <strong>{title}</strong>
                {detail && <span>{detail}</span>}
              </div>
            ))}
          </div>

          <div className="other-card">
            <h3>Languages</h3>
            {languages.map(({ name, level }) => (
              <div className="other-row" key={name}>
                <strong>{name}</strong>
                <span>{level}</span>
              </div>
            ))}
          </div>

          <div className="other-card">
            <h3>Strengths</h3>
            <ul>
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="other-card">
            <h3>Hobbies &amp; Interests</h3>
            <ul>
              {interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <img className="background-img-right" src={colorSharp2} alt="" loading="lazy" />
    </section>
  );
};
