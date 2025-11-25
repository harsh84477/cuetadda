"use client";
import { useState } from "react";
import styles from "./PrepPrograms.module.css";

export default function PrepPrograms() {
  const [year, setYear] = useState("2026");
  const [program, setProgram] = useState("Live Online");
  const [interest, setInterest] = useState("Humanities");

  return (
    <section className={styles.wrap} id="programs">
      <h2 className={styles.title}>CUET Prep. Programs</h2>
      <p className={styles.desc}>
        Students must balance their preparations effectively to score maximum marks in <b>CUET</b> and perform equally well on their Boards. To achieve this, students must grasp the crucial details of CUET UG (like syllabus, exam pattern, eligibility, the application process, universities & course list) and enroll in a comprehensive preparation program.
      </p>
      <div className={styles.subtitle}>
        <b>Get started by selecting your CUET target year and the choice of program</b>
      </div>
      <form className={styles.radioRow} onSubmit={e => e.preventDefault()}>
        <div className={styles.radioCol}>
          <div className={styles.radioTitle}>
            I am appearing/appeared for CUET in
          </div>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="year"
              value="2026"
              checked={year === "2026"}
              onChange={() => setYear("2026")}
            />
            2026
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="year"
              value="2027"
              checked={year === "2027"}
              onChange={() => setYear("2027")}
            />
            2027
          </label>
        </div>
        <div className={styles.radioCol}>
          <div className={styles.radioTitle}>
            I want this program
          </div>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="program"
              value="Live Online"
              checked={program === "Live Online"}
              onChange={() => setProgram("Live Online")}
            />
            Live Online
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="program"
              value="Classroom - Offline"
              checked={program === "Classroom - Offline"}
              onChange={() => setProgram("Classroom - Offline")}
            />
            Classroom - Offline
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="program"
              value="Self Paced Program"
              checked={program === "Self Paced Program"}
              onChange={() => setProgram("Self Paced Program")}
            />
            Self Paced Program
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="program"
              value="Test Series"
              checked={program === "Test Series"}
              onChange={() => setProgram("Test Series")}
            />
            Test Series
          </label>
        </div>
        <div className={styles.radioCol}>
          <div className={styles.radioTitle}>
            I am keen on
          </div>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="interest"
              value="Humanities"
              checked={interest === "Humanities"}
              onChange={() => setInterest("Humanities")}
            />
            Humanities
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="interest"
              value="Commerce"
              checked={interest === "Commerce"}
              onChange={() => setInterest("Commerce")}
            />
            Commerce
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="interest"
              value="Sciences"
              checked={interest === "Sciences"}
              onChange={() => setInterest("Sciences")}
            />
            Sciences
          </label>
        </div>
      </form>
      <div className={styles.btnWrap}>
        <button className={styles.btn} type="button">View program</button>
      </div>
    </section>
  );
}
