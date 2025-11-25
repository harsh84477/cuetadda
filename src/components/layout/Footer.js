import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        {/* Logo and App Downloads Section */}
        <div className={styles.logoNLinks}>
          <img 
            src="/uploads/LoGo.png" 
            className={styles.logo} 
            alt="Career Launcher" 
          />
          <div className={styles.countries}>
            <a href="#india">India</a> | <a href="#dubai">Dubai</a> | <a href="#singapore">Singapore</a>
          </div>
          <div className={styles.downloads}>
            <img src="/playstore.png" alt="Download on Play Store" />
            <img src="/appstore.png" alt="Download on App Store" />
          </div>
        </div>

        {/* Links Section - Two Columns */}
        <div className={styles.links}>
          {/* First Column: Contact Us + Company */}
          <div>
            {/* Contact Us */}
            <div>
              <h4>Contact Us</h4>
              <div className={styles.linkGroup}>
                <div>
                  <div>Corporate Contacts</div>
                  <div>Customer Support</div>
                </div>
                <div>
                  <div><span className={styles.icon}>📞</span> 8130-038-836</div>
                  <div><span className={styles.icon}>📞</span> 9267-989-969</div>
                </div>
              </div>
            </div>

            {/* Company */}
            <div style={{ marginTop: '32px' }}>
              <h4>Company</h4>
              <div className={styles.linkGroupThree}>
                <div>
                  <div>About Us</div>
                  <div>Partner with us</div>
                  <div>Management Team</div>
                </div>
                <div>
                  <div>Our Results</div>
                  <div>Careers at CL</div>
                  <div>Media Coverage</div>
                </div>
                <div>
                  <div>Our Centers</div>
                  <div>Board of Directors</div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column: Social Media + Popular Products */}
          <div>
            {/* Social Media */}
            <div>
              <h4>Follow us on Social</h4>
              <div className={styles.linkGroupThree}>
                <div>
                  <div>Facebook</div>
                  <div>Quora</div>
                  <div>MBA Blog</div>
                  <div>CUET Blog</div>
                </div>
                <div>
                  <div>Instagram</div>
                  <div>Twitter</div>
                  <div>Law Blog</div>
                </div>
                <div>
                  <div>Linkedin</div>
                  <div>YouTube</div>
                  <div>IPM Blog</div>
                </div>
              </div>
            </div>

            {/* Popular Products */}
            <div style={{ marginTop: '32px' }}>
              <h4>Popular Products</h4>
              <div className={styles.productsGrid}>
                <div>
                  <div>MBA</div>
                  <div>CUET</div>
                </div>
                <div>
                  <div>LAW</div>
                  <div>Tuitions</div>
                </div>
                <div>
                  <div>IPM</div>
                  <div>UPSC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}