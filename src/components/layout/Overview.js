import styles from "./Overview.module.css";

const NEWS = [
  {
    title: "CUET UG 2025 Results out. Check Details!",
    badge: "NEW"
  },
  {
    title: "CUET UG (latest) exam pattern - UGC announces big changes for CUET 2025. - Read more"
  },
  {
    title: "CUET Previous Year Question Papers [2022, 2023, & 2024] - PDF Download"
  }
];

export default function OverviewSection() {
  return (
    <section>
      {/* Heading and Description */}
      <div className={styles.overviewWrap}>
        <h2 className={styles.overviewTitle}>Overview of CUET</h2>
        <p className={styles.overviewText}>
          NTA has been bestowed with the responsibility of conducting <b>CUET</b> annually. It is India's second biggest UG entrance test (after JEE). CUET is the sole gateway for UG admission to the participating universities. Each year, the number of applicants and participating universities increases, leading to stiffer competition to secure seats in top colleges.
        </p>
        <p className={styles.overviewText}>
          Scroll down the page or select from the content sub-menu above to explore and grasp valuable insights regarding crucial details of <b>CUET</b>, free resources, and preparation programs and develop a suitable strategy to boost your preparation for CUET (UG).
        </p>
      </div>
      {/* Banner + News box */}
      <div className={styles.section}>
        <div className={styles.bannerCol}>
          <img
            src="/banner-easyapply.jpg"
            alt="EasyApply banner"
            className={styles.banner}
          />
        </div>
        <div className={styles.newsCol}>
          <div className={styles.newsCard}>
            <div className={styles.newsHeader}>Latest News @ CUET</div>
            <ul className={styles.newsList}>
              {NEWS.map((item, i) => (
                <li key={i} className={styles.newsItem}>
                  <span>{item.title}</span>
                  {item.badge && (
                    <span className={styles.badge}>{item.badge}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
