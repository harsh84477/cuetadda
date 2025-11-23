import styles from "./CourseCuratedBy.module.css";

const INSTRUCTORS = [
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

export default function CourseCuratedBy() {
  return (
    <section className={styles.wrap}>
      <h2 className={styles.title}>Course Curated By</h2>
      <div className={styles.subtitle}>
        30+ years of CL’s unique pedagogy delivered by the best instructors
      </div>
      <div className={styles.topRow}>
        {INSTRUCTORS.slice(0, 3).map(inst => (
          <div className={styles.box} key={inst.name}>
            <img src={inst.img} alt={inst.name} className={styles.photo} />
            <div>
              <span className={styles.name}>{inst.name}</span>
              <div className={styles.sub}>{inst.subtitle}</div>
              <div className={styles.place}>{inst.place}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.bottomRow}>
        {INSTRUCTORS.slice(3).map(inst => (
          <div className={styles.box} key={inst.name}>
            <img src={inst.img} alt={inst.name} className={styles.photo} />
            <div>
              <span className={styles.name}>{inst.name}</span>
              <div className={styles.sub}>{inst.subtitle}</div>
              <div className={styles.place}>{inst.place}</div>
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
