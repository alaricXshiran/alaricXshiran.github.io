import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills & Expertise</h2>
              <p>Here are the core technologies, tools, and engineering domains I specialize in.</p>
              
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <h5>Full Stack Web Development</h5>
                  <p>React.js, Node.js, Express.js, MongoDB, Next.js</p>
                </div>
                <div className="item">
                  <h5>IoT & Hardware Systems</h5>
                  <p>ESP32, Sensors, Embedded Integration</p>
                </div>
                <div className="item">
                  <h5>Languages & Databases</h5>
                  <p>Python, JavaScript, SQL, PHP, Prisma ORM</p>
                </div>
                <div className="item">
                  <h5>Tools & Architecture</h5>
                  <p>REST APIs, Docker, Git/GitHub, Swagger, Zod</p>
                </div>
                <div className="item">
                  <h5>Design & Media</h5>
                  <p>GIMP, Video Editing, UI/UX Layouts</p>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-img-left" src={colorSharp} alt="" />
    </section>
  );
};