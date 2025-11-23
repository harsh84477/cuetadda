"use client";
import { useState } from "react";
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
  "CUET UG FAQs"
];

const TableOfContents = () => {
  const [open, setOpen] = useState(true);

  return (
    <section className={styles.tocSection}>
      <div
        className={styles.tocHeader}
        onClick={() => setOpen((prev) => !prev)}
        style={{ cursor: "pointer" }}
        aria-expanded={open}
      >
        <span>Table of Contents</span>
        <span className={styles.tocIcon} style={{ transform: open ? "rotate(0deg)" : "rotate(180deg)" }}>
          &#8963;
        </span>
      </div>
      {open && (
        <div className={styles.tocList}>
          {tocItems.map((item, idx) => (
            <div className={styles.tocItem} key={idx}>
              {item}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TableOfContents;
