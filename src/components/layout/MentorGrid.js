import styles from "./MentorGrid.module.css";

const MENTORS = [
  {
    name: "Satya Narayanan R.",
    subtitle: "St. Stephen’s College, Delhi University",
    place: "IIM Bangalore",
    img: "/faculty1.jpg"
  },
  {
    name: "Gautam Puri",
    subtitle: "Punjab University, Chandigarh",
    place: "IIM Bangalore",
    img: "/faculty2.jpg"
  },
  {
    name: "R. Shiva Kumar",
    subtitle: "IIT Madras",
    place: "IIM Calcutta",
    img: "/faculty3.jpg"
  },
  {
    name: "Sreenivasan R.",
    subtitle: "Jawahar Lal Nehru University",
    place: "IIM Bangalore",
    img: "/faculty4.jpg"
  },
  {
    name: "Sujatha Kshirsagar",
    subtitle: "R.A. Poddar, Bombay",
    place: "IIM Bangalore",
    img: "/faculty5.jpg"
  }
];

export default function MentorGrid() {
  return (
    <section className={styles.wrap} id="mentors">
      <h2 className={styles.title}>Course Curated By</h2>
      <div className={styles.subtitle}>
        30+ years of CL’s unique pedagogy delivered by the best instructors
      </div>
      <div className={styles.topRow}>
        {MENTORS.slice(0, 3).map(mentor => (
          <div className={styles.box} key={mentor.name}>
            <img src={mentor.img} alt={mentor.name} className={styles.photo} />
            <div>
              <span className={styles.name}>{mentor.name}</span>
              <div className={styles.sub}>{mentor.subtitle}</div>
              <div className={styles.place}>{mentor.place}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.bottomRow}>
        {MENTORS.slice(3).map(mentor => (
          <div className={styles.box} key={mentor.name}>
            <img src={mentor.img} alt={mentor.name} className={styles.photo} />
            <div>
              <span className={styles.name}>{mentor.name}</span>
              <div className={styles.sub}>{mentor.subtitle}</div>
              <div className={styles.place}>{mentor.place}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.note}>
        ...and many more subject experts
      </div>
    </section>
  );
}
