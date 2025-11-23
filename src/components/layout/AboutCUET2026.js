import styles from "./AboutCUET2026.module.css";

const TABLE = [
  ["Registration starts", "March First week"],
  ["Registration closes", "March-end"],
  ["Last date for the application fee", "March-end"],
  ["Correction window", "March-end"],
  ["Announcement of the exam city slip", "Last week of April"],
  ["Admit card", "A few days before the exam"],
  ["Exam dates", "May - June, 2026"],
  ["Reserve exam dates.", "TBA"],
  ["Display of Answer Key", "TBA"],
  ["Declaration of result", "TBA"]
];

export default function AboutCUET2026() {
  return (
    <section className={styles.wrap}>
      <h2 className={styles.title}>About CUET 2026</h2>
      <p className={styles.desc}>
        The National Testing Agency (NTA) administers the Common University Entrance Test (<b>CUET - UG</b>) for admissions to undergraduate courses in various central, state, private, & many other universities in India. More than 250 universities (including 47 central universities, like DU, BHU, JNU, JMI, Allahabad University, University of Hyderabad, etc.) fall under the purview of <b>CUET</b> and will accept only CUET scores as the basis of UG admission.
      </p>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Registration starts</th>
              <th>March First week</th>
            </tr>
          </thead>
          <tbody>
            {TABLE.slice(1).map(([a, b], i) => (
              <tr key={a}>
                <td>{a}</td>
                <td>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
