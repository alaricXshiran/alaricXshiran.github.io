import { useEffect, useState } from "react";

const TYPE_SPEED = 70; // ms per letter when typing
const DELETE_SPEED = 35; // ms per letter when deleting
const HOLD_TIME = 1800; // pause on the full word
const GAP_TIME = 350; // pause before the next word starts

// Types each role, pauses, deletes it, then moves on to the next one.
export const TypedRoles = ({ roles }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [animate] = useState(
    () =>
      !(
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
  );

  const role = roles[roleIndex % roles.length];

  useEffect(() => {
    if (!animate) return;

    let delay;
    let next;

    if (!deleting && length < role.length) {
      delay = TYPE_SPEED;
      next = () => setLength(length + 1);
    } else if (!deleting) {
      delay = HOLD_TIME;
      next = () => setDeleting(true);
    } else if (length > 0) {
      delay = DELETE_SPEED;
      next = () => setLength(length - 1);
    } else {
      delay = GAP_TIME;
      next = () => {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      };
    }

    const timer = setTimeout(next, delay);
    return () => clearTimeout(timer);
  }, [animate, deleting, length, role, roleIndex, roles.length]);

  return (
    <span className="wrap-line">
      <span className={animate ? "wrap" : "wrap wrap-static"} aria-hidden="true">
        {animate ? role.slice(0, length) : role}
      </span>
      {/* Screen readers get the full list instead of letter-by-letter text */}
      <span className="visually-hidden">{roles.join(", ")}</span>
    </span>
  );
};
