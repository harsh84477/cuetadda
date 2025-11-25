import React from "react";
import styles from "./CoursesCarousel.module.css"; // Create this CSS file

// Sample image import if in 'public' folder
// Use: <img src="/images/Screenshot 2025-11-24 110914.png" ... /> below

const courses = [
  {
    title: "CUET 2026 Online Classes",
    validity: "Validity till May 31, 2026",
    features: [
      "150+ hours* of live class",
      "60-80 hours* of self-paced lesson",
      "Domain Subject preparation",
      "Sessions on English + GAT",
      "1-2 chapter-wise tests"
    ]
  },
  {
    title: "XI + XII + CUET 2027 Online Classes",
    validity: "Validity till May 31, 2027",
    features: [
      "500+ hours* of live class",
      "120-140 hours* of self-paced lesson",
      "Class XI & XII syllabus coverage",
      "Brief sessions on English + GAT (General Aptitude Test)",
      "1-2 chapter-wise tests"
    ]
  },
  {
    title: "CUET 2026 Crash Course",
    validity: "Validity till June 30, 2026",
    features: [
      "120 hours* of live class",
      "80-100 hours* of self-paced lesson",
      "CUET syllabus coverage",
      "Sessions on English & GAT",
      "1-2 chapter-wise tests"
    ]
  },
  {
    title: "CUET Domain Focus",
    validity: "Validity till May 31, 2026",
    features: [
      "200+ hours domain classes",
      "Self-paced module access",
      "Weekly live problem-solving",
      "Faculty Q&A sessions",
      "1-2 full-length tests"
    ]
  },
  {
    title: "CUET GAT Booster",
    validity: "Validity till June 30, 2026",
    features: [
      "80+ hours of GAT classes",
      "Targeted reasoning practice",
      "Current affairs capsules",
      "Mock interviews and quizzes",
      "Personal mentor support"
    ]
  }
  // Add more as needed...
];

export default function CoursesCarousel() {
  return (
    <div className={styles.carouselContainer}>
      {/* Banner image above carousel */}
      <img
        src="/uploads/CUET-UG-2025.png"
        alt="CUET Banner"
        className={styles.bannerImage}
      />

      <h2 className={styles.heading}>
        Choose the Suitable CUET Prep Program for You
      </h2>
      <div className={styles.carouselWrapper}>
        {courses.map((course, idx) => (
          <div className={styles.courseCard} key={idx}>
            <div className={styles.courseHeader}>{course.title}</div>
            <div className={styles.courseValidity}>{course.validity}</div>
            <ul className={styles.courseFeatures}>
              {course.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className={styles.enrollBtn}>Enroll now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
