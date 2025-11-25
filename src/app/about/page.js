import styles from './page.module.css';

export default function About() {
  return (
    <main className={styles.about}>
      <section className={styles.hero}>
        <h1>About Career Launcher</h1>
        <p>Empowering students since 1995. Helping you reach your academic, career, and life goals.</p>
      </section>

      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          To enable individuals realize their potential and make their dreams come true by providing world-class education and guidance.
        </p>
      </section>

      <section className={styles.sectionGrid}>
        <div>
          <h3>Proven Track Record</h3>
          <p>Thousands of successful alumni across top institutes and organizations.</p>
        </div>
        <div>
          <h3>Dedicated Mentors</h3>
          <p>Highly qualified teachers and mentors guiding you every step of the way.</p>
        </div>
        <div>
          <h3>Innovative Learning</h3>
          <p>Blending technology with learning for the best outcomes.</p>
        </div>
        <div>
          <h3>Community Support</h3>
          <p>Vibrant student community and continuous support—all year round.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Our Story</h2>
        <p>
          Career Launcher started with a small team passionate about education and now spans multiple countries, delivering quality programs to thousands of learners every year. Our mission is to help you discover your path and succeed in it.
        </p>
      </section>
    </main>
  );
}
