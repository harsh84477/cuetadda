import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Upper Footer */}
      <div className={styles.upper}>
        <div className={styles.colLogo}>
          <img src="/logo_white.png" alt="Career Launcher" className={styles.logo} />
          <div className={styles.loc}>India | Dubai | Singapore</div>
          <div className={styles.apps}>
            <img src="/google-play.svg" alt="Google Play" />
            <img src="/app-store.svg" alt="App Store" />
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.head}>Contact Us</div>
          <div>Corporate Contacts</div>
          <div>Customer Support</div>
          <div>📞 8130-038-836</div>
          <div>🟢 9267-989-969</div>
        </div>
        <div className={styles.col}>
          <div className={styles.head}>Company</div>
          <div>About Us</div>
          <div>Our Centers</div>
          <div>Careers at CL</div>
          <div>Management Team</div>
          <div>Our Results</div>
          <div>Partner with us</div>
          <div>Board of Directors</div>
          <div>Media Coverage</div>
        </div>
        <div className={styles.col}>
          <div className={styles.head}>Follow us on Social</div>
          <div>Facebook</div>
          <div>Linkedin</div>
          <div>Twitter</div>
          <div>MBA Blog</div>
          <div>IPM Blog</div>
          <div>Instagram</div>
          <div>Quora</div>
          <div>YouTube</div>
          <div>Law Blog</div>
          <div>CUET Blog</div>
        </div>
        <div className={styles.col}>
          <div className={styles.head}>Popular Products</div>
          <div>MBA</div>
          <div>IPM</div>
          <div>Tuitions</div>
          <div>LAW</div>
          <div>CUET</div>
          <div>UPSC</div>
          <div>Study Aboard</div>
        </div>
      </div>
      {/* Lower Footer */}
      <div className={styles.lower}>
        <div className={styles.vSection}>
          <div className={styles.vTitle}>Business Verticals</div>
          <div>GK Publications</div>
          <div className={styles.vNote}>Book & Publication</div>
          <div>Kestone</div>
          <div className={styles.vNote}>Marketing Services</div>
          <div>WAIN-Connect</div>
          <div className={styles.vNote}>Academia-Industry Network</div>
        </div>
        <div className={styles.vSection}>
          <div className={styles.vTitle}>Academic Verticals</div>
          <div>Law Entrance</div>
          <div className={styles.vNote}>Coaching for CLAT AILET LSAT</div>
          <div>GATE Entrance</div>
          <div className={styles.vNote}>Coaching for GATE IES PSU</div>
          <div>Futuremap</div>
          <div className={styles.vNote}>Career Guidance</div>
        </div>
        <div className={styles.legal}>
          <div>Privacy Policy & Terms of Sale</div>
          <div>📞 8130-038-836</div>
          <div>&copy; CL Educate Ltd</div>
        </div>
      </div>
    </footer>
  );
}
