import {
  EnvelopeFill,
  Linkedin,
  Github,
  GeoAltFill,
} from "react-bootstrap-icons";
import { profile } from "../data";

export const Contact = () => {
  const items = [
    {
      icon: <EnvelopeFill />,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: <Linkedin />,
      label: "LinkedIn",
      value: "alaric-shiran",
      href: profile.linkedin,
    },
    {
      icon: <Github />,
      label: "GitHub",
      value: "alaricXshiran",
      href: profile.github,
    },
    {
      icon: <GeoAltFill />,
      label: "Location",
      value: profile.location,
    },
  ];

  return (
    <section className="section contact" id="connect">
      <div className="container">
        <div className="contact-box">
          <h2>Let&apos;s Connect</h2>
          <p className="section-lead">
            I&apos;m open to software engineering, IT technician and technical
            support roles. The quickest way to reach me is by email.
          </p>

          <div className="contact-grid">
            {items.map(({ icon, label, value, href }) => {
              const body = (
                <>
                  <span className="contact-icon">{icon}</span>
                  <span className="contact-text">
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </span>
                </>
              );
              return href ? (
                <a
                  className="contact-item"
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                >
                  {body}
                </a>
              ) : (
                <div className="contact-item" key={label}>
                  {body}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
