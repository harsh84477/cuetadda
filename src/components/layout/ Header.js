import styles from './Header.module.css';
// import logo from '/logo.png'; // Update this path

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {/* <img src={logo} alt="Site Logo" className={styles.logo} /> */}
        <span className={styles.brand}>CUET Portal</span>
      </div>
      <nav className={styles.nav}>
        <a href="about" className={styles.link}>About</a>
        <a href="#programs" className={styles.link}>Programs</a>
        <a href="#subjects" className={styles.link}>Subjects</a>
        <a href="#mentors" className={styles.link}>Mentors</a>
        <a href="#faqs" className={styles.link}>FAQs</a>
      </nav>
      <button className={styles.cta}>Enroll Now</button>
    </header>
  );
}
