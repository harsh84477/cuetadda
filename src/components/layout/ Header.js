import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>Career Launcher</div>
    <nav>
      <a href="#" className={styles.link}>Programs</a>
      <a href="#" className={styles.link}>Exam</a>
      <a href="#" className={styles.link}>Free Resources</a>
      {/* Add other links here */}
    </nav>
    <button className={styles.cta}>Start learning for FREE</button>
  </header>
);

export default Header;
