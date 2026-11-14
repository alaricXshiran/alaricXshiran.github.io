import { Linkedin, Github, EnvelopeFill } from "react-bootstrap-icons";
import { profile } from "../data";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="social-icon">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <EnvelopeFill />
          </a>
        </div>
      </div>
    </footer>
  );
};
