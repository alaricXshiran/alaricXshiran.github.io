import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
