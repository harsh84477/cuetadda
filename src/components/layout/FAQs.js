"use client";
import { useState } from "react";
import styles from "./FAQs.module.css";

const FAQS = [
  {
    q: "Who can appear for CUET UG?",
    a: "Anyone who has passed or is due to appear for their class XII Boards is eligible. There is no upper or lower limit to the number of universities or courses you can apply for; each university sets its own eligibility criteria."
  },
  {
    q: "What is tested in CUET?",
    a: "CUET tests language skills, subject knowledge (based on NCERT class 12 syllabus), reasoning, and quantitative ability. There is negative marking for wrong answers."
  },
  {
    q: "How many universities participate in CUET?",
    a: "More than 250 universities participate, including 47 Central Universities like DU, BHU, JNU, JMI, and University of Hyderabad."
  },
  {
    q: "How many times is CUET conducted per year?",
    a: "Currently, CUET is conducted once a year. The registration and examination schedule is announced by the National Testing Agency."
  },
  {
    q: "How are admissions decided if there is a tie?",
    a: "If two or more students have the same CUET score and opt for the same college/course, class XII marks (best of 3/4/5) are considered. If still undecided, age (older gets preference) is used as the tie-breaker."
  }
];

export default function FAQs() {
  const [open, setOpen] = useState(null);
  return (
    <section className={styles.wrap} id="faqs">
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {FAQS.map((faq, idx) => (
          <div className={styles.faqItem} key={idx}>
            <button
              className={styles.q}
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              {faq.q}
              <span className={styles.arrow}>
                {open === idx ? "▲" : "▼"}
              </span>
            </button>
            {open === idx && (
              <div className={styles.a}>{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
