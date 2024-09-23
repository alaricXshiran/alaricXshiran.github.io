import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>hi this is dummy text</p>
              <div className="item">
                <h5>Web Development</h5>
              </div>
              <div className="item">
                <h5>Iot</h5>
              </div>
              <div className="item">
                <h5>Logo design</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-img-left" src={colorSharp} />
    </section>
  );
};
