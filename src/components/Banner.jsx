import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  const handleConnect = () => {
    window.location.href = "#connect";
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Alaric `}
              <span className="wrap">Software Engineer</span>
            </h1>
            <p className="type-p">
              I am a Full Stack Software Engineer holding a BSc (Hons) in
              Software Engineering from the University of Plymouth[cite: 1].
              With hands-on professional experience building modern web
              applications, scalable APIs, and IoT integrations, I specialize in
              turning complex problems into clean, efficient digital solutions.
            </p>
            <div className="buttons">
              <button onClick={handleConnect}>
                Looking To Connect?
                <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Graphic" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
