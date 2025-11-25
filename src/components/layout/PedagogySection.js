import styles from "./PedagogySection.module.css";

export default function PedagogySection() {
  return (
    <section className={styles.wrap}>
      <div className={styles.colLeft}>
        <img
          src="uploads/6858_pedagogy.png"
          alt="CL 360 Pedagogy Wheel"
          className={styles.wheel}
        />
      </div>
      <div className={styles.colRight}>
        <h2 className={styles.title}>
          CUET Ka King Kaun? Career Launcher
        </h2>
        <ul className={styles.list}>
          <li>
            CL's 360-degree approach to pedagogy and CUET preparation stands out and delivers fruitful outcomes.
          </li>
          <li>
            Our mentors are from the best backgrounds (IITs, IIMs, PhDs, and CAs) and bring a synthesis across multi-subject competencies.
          </li>
          <li>
            With interactive and immersive learning, each subject comes alive and exciting for a lifetime, not just for CUET preparation.
          </li>
          <li>
            1200+ 100% - iles &amp; perfect scores consecutively for 2 years (CUET 2023 &amp; 2024) showcase our track record of CUET success.
          </li>
        </ul>
      </div>
    </section>
  );
}
