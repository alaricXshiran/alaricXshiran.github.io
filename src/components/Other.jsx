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
            <p>University of Plymouth, UK (Second Class Lower Division)</p>
            <p>Advanced Certificate Course – NSBM Green University, Sri Lanka</p>
          </div>

          <div className="other-card">
            <h3>Languages</h3>
            <p><strong>English:</strong> Fluent</p>
            <p><strong>Sinhala:</strong> Fluent</p>
            <p><strong>Japanese:</strong> Beginner</p>
          </div>

          <div className="other-card">
            <h3>Hobbies & Interests</h3>
            <ul>
              <li>3D printing and design</li>
              <li>Electronics and IoT projects</li>
              <li>Building and maintaining personal computers</li>
            </ul>
          </div>
        </div>
      </div>

      <img className="background-img-left" src={colorSharp} alt="" />
    </section>
  );
};