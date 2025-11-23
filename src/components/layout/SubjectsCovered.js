"use client";
import { useState } from "react";
import styles from "./SubjectsCovered.module.css";

const DATA = {
  "2026": [
    {
      group: "Section 1: Language",
      colorClass: "langBox",
      items: [{ label: "English" }]
    },
    {
      group: "Commerce",
      colorClass: "domainBox",
      bold: true,
      items: [
        { label: "Accountancy" },
        { label: "Economics" },
        { label: "Business Studies" },
        { label: "Applied Maths" }
      ]
    },
    {
      group: "Humanities",
      colorClass: "domainBox",
      bold: true,
      items: [
        { label: "Pol Science" },
        { label: "History" },
        { label: "Psychology" },
        { label: "Sociology" }
      ]
    },
    {
      group: "Science",
      colorClass: "domainBox",
      bold: true,
      items: [
        { label: "Core Maths" }
      ]
    },
    {
      group: "Section 3: GAT",
      colorClass: "gatBox",
      items: [{ label: "General Aptitude Test" }]
    }
  ],
  "2027": [
    {
      group: "Section 1: Language",
      colorClass: "langBox",
      items: [{ label: "English" }]
    },
    {
      group: "Commerce",
      colorClass: "domainBox",
      bold: true,
      items: [
        { label: "Accountancy" },
        { label: "Statistics" }
      ]
    },
    {
      group: "Humanities",
      colorClass: "domainBox",
      bold: true,
      items: [
        { label: "Sociology" },
        { label: "Political Science" }
      ]
    },
    {
      group: "Science",
      colorClass: "domainBox",
      bold: true,
      items: [{ label: "Physics" }]
    },
    {
      group: "Section 3: GAT",
      colorClass: "gatBox",
      items: [{ label: "General Aptitude Test" }]
    }
  ]
};

export default function SubjectsCovered() {
  const [year, setYear] = useState("2026");
  const groups = DATA[year];

  return (
    <section className={styles.wrap}>
      <h2 className={styles.title}>Subjects covered</h2>
      <div className={styles.yearTabs}>
        <button
          className={year === "2026" ? styles.activeTab : ""}
          onClick={() => setYear("2026")}
        >
          2026
        </button>
        <button
          className={year === "2027" ? styles.activeTab : ""}
          onClick={() => setYear("2027")}
        >
          2027
        </button>
      </div>
      <div className={styles.sectionsRow}>
        {groups.map((g, idx) => (
          <div
            key={g.group}
            className={`${styles.sectionBox} ${styles[g.colorClass]}`}
          >
            <div className={styles.sectionTitle}>
              {g.bold ? <b>{g.group}</b> : g.group}
            </div>
            <ul>
              {g.items.map((i, j) => (
                <li key={j}>{i.label}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
