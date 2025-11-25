"use client";
import { useState } from "react";
import styles from "./NavBar.module.css";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Exam", href: "#exam" },
  { label: "Result", href: "#result" },
  { label: "Free Resources", href: "#free-resources" },
  { label: "Domain Subjects", href: "#subjects" },
  { label: "Universities", href: "#universities" },
  { label: "EasyApply", href: "#easyapply", highlight: true }
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navBar}>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span className={styles.menuIcon}>&#9776;</span> Menu
      </button>
      <div className={`${styles.linksContainer} ${open ? styles.show : ""}`}>
        {navLinks.map((l) => (
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
