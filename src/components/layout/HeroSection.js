// src/components/HeroSection.js
import styles from "./HeroSection.module.css";
import DoubtForm from "./doubtForm"; // Use your existing form

const HeroSection = () => (
  <section className={styles.heroWrap}>
    <div className={styles.leftArea}>
      <h1 className={styles.title}>CUET (UG)</h1>
      <button className={styles.infoBtn}>
        Brief Information & Preparation Programs
      </button>
      <p className={styles.description}>
        <strong>CUET UG:</strong> It is a nationwide entrance test for UG admission to 217 universities.
        Get brief insight and put your best foot forward to ace the CUET & Board exam preparation. Explore
        brief information regarding CUET and check various free and premium preparation resources to maximize CUET scores and secure admission to top colleges in the country.
      </p>
      <div className={styles.banner}>
        <img src="/promo-banner.jpg" alt="Crack Boards + CUET 2026" />
      </div>
    </div>
    <div className={styles.rightArea}>
      <DoubtForm />
    </div>
  </section>
);

export default HeroSection;
