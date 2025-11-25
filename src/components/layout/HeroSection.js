import DoubtForm from "./doubtForm";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroWrap}>
      <div className={styles.leftArea}>
        <div className={styles.title}>
          Get Ready for CUET 2026!<br />
          <span className={styles.highlight}>Smart Prep. | Top Colleges | Expert Mentoring</span>
        </div>
        <button className={styles.infoBtn}>View Demo Class</button>
        <p className={styles.description}>
          Join India’s top-rated CUET prep programs and ace your university entrance dreams! Get guidance from expert faculty, live sessions, free mock tests, and more.
        </p>

        <div className={styles.banner}>
        <img
          src="/uploads/test-series.png"
          alt="CUET Banner"
          className={styles.bannerImage}
        />
      </div>

      </div>
      <div className={styles.rightArea}>
        <div className={styles.banner}>
          <DoubtForm/>
        </div>
      </div>
    </section>
  );
}
