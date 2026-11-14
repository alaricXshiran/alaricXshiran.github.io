import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, Download } from "react-bootstrap-icons";
import resumeFile from "../assets/docs/Alaric_Resume.pdf";
import { profile } from "../data";
import { TypedRoles } from "./TypedRoles";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} lg={9} xl={8}>
            <span className="tagline">{profile.roles.join(" · ")}</span>
            <h1>
              {`Hi! I'm Alaric `}
              <TypedRoles roles={profile.roles} />
            </h1>
            <p className="type-p">
              I&apos;m a Software Engineering graduate from the University of
              Plymouth who is as comfortable inside a PC case as inside a
              codebase. I&apos;ve shipped full stack web applications with
              React, Node.js and Prisma, built embedded devices on the ESP32,
              and I enjoy tracking down hardware and software faults until
              they&apos;re fixed.
            </p>
            <div className="buttons">
              <a className="banner-btn" href="#connect">
                Let&apos;s Connect
                <ArrowRightCircle size={25} />
              </a>
              <a
                className="banner-btn banner-btn-outline"
                href={resumeFile}
                download="Alaric_Shiran_CV.pdf"
              >
                Download CV
                <Download size={20} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
