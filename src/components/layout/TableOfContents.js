"use client"
import { useState, useCallback } from "react";
import styles from "./TableOfContents.module.css";

const tocItems = [
  "Overview of CUET",
  "CUET Achievers - 2024",
  "CUET Prep. Programs",
  "Our Mentors",
  "About CUET 2026",
  "CUET Coaching Programs",
  "CUET University List",
  "CUET UG Articles",
  "Top Colleges of DU",
  "CUET Popular Courses",
  "CUET UG FAQs",
];

export default function TableOfContents() {
  const [open, setOpen] = useState(true);

  const toggle = useCallback(() => setOpen((v) => !v), []);

  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className={styles.container}>
      {/* Banner */}
      <div className={styles.banner}>
        <img
          src="/uploads/Screenshot 2025-11-24 110914.png"
          alt="CUET Banner"
          className={styles.bannerImage}
        />
      </div>

      {/* Table of Contents (dropdown) */}
      <section className={styles.tocSection}>
        <div
          className={styles.tocHeader}
          role="button"
          tabIndex={0}
          aria-expanded={open}
          onClick={toggle}
          onKeyDown={onKey}
        >
          <span>Table of Contents</span>
          <span
            className={`${styles.tocIcon} ${open ? styles.open : ""}`}
            aria-hidden="true"
          >
            ⌃
          </span>
        </div>

        <div className={`${styles.tocList} ${open ? styles.show : styles.hidden}`}>
          {tocItems.map((item, idx) => (
            <div className={styles.tocItem} key={idx} role="link" tabIndex={0}>
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
