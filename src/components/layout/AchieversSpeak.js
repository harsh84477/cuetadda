import styles from "./AchieversSpeak.module.css";

const ACHIEVERS = [
  {
    title: "Hindu College",
    name: "Shubhaan Sharma",
    id: "1192176",
    video: "dQw4w9WgXcQ"
  },
  {
    title: "Jesus & Mary",
    name: "Anushka Sehgal",
    id: "1206177",
    video: "3tmd-ClpJxA"
  },
  {
    title: "SRCC",
    name: "Mohammad Hamza Shabbir",
    id: "12024568",
    video: "6_b7RDuLwcI"
  }
];

export default function AchieversSpeak() {
  return (
    <section className={styles.wrap}>
      <h2 className={styles.title}>Achievers Speak</h2>
      <div className={styles.subtitle}>Congratulations to the CUET 2025 achievers!</div>
      <div className={styles.cardsRow}>
        {ACHIEVERS.map((ach) => (
          <div className={styles.card} key={ach.id}>
            <iframe
              width="290"
              height="162"
              src={`https://www.youtube.com/embed/${ach.video}`}
              title={ach.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.video}
            />
            <div className={styles.cardTitle}>{ach.title}</div>
            <div className={styles.cardInfo}>
              <div>{ach.name}</div>
              <div>CL ID: {ach.id}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
