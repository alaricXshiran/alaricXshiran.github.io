import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  Linkedin,
  Github,
  EnvelopeFill,
  Download,
  SunFill,
  MoonStarsFill,
} from "react-bootstrap-icons";
import logo from "../assets/img/logo.svg";
import resumeFile from "../assets/docs/Alaric_Resume.pdf";
import { profile } from "../data";
import { getInitialTheme, applyTheme } from "../theme";

const links = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
];

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Highlight the link for the section currently on screen
      let current = "home";
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveLink(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToContact = () => {
    setExpanded(false);
    document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className={scrolled || expanded ? "scrolled" : ""}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Alaric Shiran logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map(({ id, label }) => (
              <Nav.Link
                key={id}
                href={`#${id}`}
                className={
                  activeLink === id ? "active navbar-link" : "navbar-link"
                }
                onClick={() => {
                  setActiveLink(id);
                  setExpanded(false);
                }}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                title="Email"
              >
                <EnvelopeFill />
              </a>
              <a
                href={resumeFile}
                download="Alaric_Shiran_CV.pdf"
                aria-label="Download CV"
                title="Download CV"
              >
                <Download />
              </a>
              <button
                type="button"
                className="theme-toggle"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                title={theme === "dark" ? "Light mode" : "Dark mode"}
              >
                {theme === "dark" ? <SunFill /> : <MoonStarsFill />}
              </button>
            </div>
            <button className="vvd" onClick={goToContact}>
              <span>Let&apos;s Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
