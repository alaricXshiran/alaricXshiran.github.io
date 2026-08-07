import colorSharp from "../assets/img/color-sharp.png";

export const Other = () => {
  return (
    <section className="other" id="other">
      <div className="container">
        <h2>Background & Interests</h2>
        
        <div className="other-grid">
          <div className="other-card">
            <h3>Education</h3>
            <p><strong>BSc (Hons) in Software Engineering</strong></p>
            <p>University of Plymouth, UK (Second Class Lower Division)[cite: 1]</p>
            <p>Advanced Certificate Course – NSBM Green University, Sri Lanka[cite: 1]</p>
          </div>

          <div className="other-card">
            <h3>Languages</h3>
            <p><strong>English:</strong> Fluent[cite: 1]</p>
            <p><strong>Sinhala:</strong> Fluent[cite: 1]</p>
            <p><strong>Japanese:</strong> Beginner[cite: 1]</p>
          </div>

          <div className="other-card">
            <h3>Hobbies & Interests</h3>
            <ul>
              <li>3D printing and design[cite: 1]</li>
              <li>Electronics and IoT projects[cite: 1]</li>
              <li>Building and maintaining personal computers[cite: 1]</li>
            </ul>
          </div>
        </div>
      </div>

      <img className="background-img-left" src={colorSharp} alt="" />
    </section>
  );
};