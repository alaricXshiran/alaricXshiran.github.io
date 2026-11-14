import { skills } from "../data";
import { stagger } from "../reveal";

export const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="skill-bx">
          <h2 data-reveal="">Skills</h2>
          <p className="section-lead" data-reveal="">
            The languages, tools and hardware I work with.
          </p>

          <div className="skill-grid">
            {skills.map(({ group, items }, i) => (
              <div className="skill-group" key={group} {...stagger(i)}>
                <h3>{group}</h3>
                <div className="chips">
                  {items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
