"use client";
import { useState } from "react";
import styles from "./NavBar.module.css";

const LINKS = [
  { label: "Programs", href: "#" },
  { label: "Exam", href: "#" },
  { label: "Result", href: "#" },
  { label: "Free Resources", href: "#" },
  { label: "Domain Subjects", href: "#" },
  { label: "Universities", href: "#" },
  { label: "EasyApply", href: "#", highlight: true }
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navBar}>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle navigation menu"
      >
        <span className={styles.menuIcon}>&#9776;</span> Menu
      </button>
      <div className={`${styles.linksContainer} ${open ? styles.show : ""}`}>
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className={`${styles.link} ${l.highlight ? styles.highlight : ""}`}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
