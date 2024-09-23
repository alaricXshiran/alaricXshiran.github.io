import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              Hi! I'm Alaric{" "}
              <span className="wrap">a Software Engineering Undergraduate</span>
            </h1>
            <p className="type-p">
              I am an enthusiastic undergraduate student who recently earned a
              BSc Hons in Software Engineering with a Second Class. With a
              strong foundation in programming and a keen interest in learning
              new technologies, I am eager to apply my knowledge and skills to
              real-world projects.
            </p>
            <div className="buttons">
              <button onClick={() => console.log("connect")}>
                Looking To Connect?
                <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
