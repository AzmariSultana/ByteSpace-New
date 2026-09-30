"use client";

import React, { useState } from "react";
import Image from "next/image";
import CourseHeroBanner from "@/components/CourseHeroBanner";
import CourseSidebarCard from "@/components/CourseSidebarCard";
import CourseNavTabs from "@/components/CourseNavTabs";
import Footer from "@/components/Footer";
import styles from "./CourseReviews.module.css";

const RATING_BREAKDOWN = [
  { percent: 92.3, count: 720 },
  { percent: 36.5, count: 120 },
  { percent: 9.5, count: 21 },
  { percent: 3.5, count: 12 },
  { percent: 5.3, count: 16 },
];

const REVIEWS = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/assets/images/figma_efb6f62056dfdd8faea9ed52a81fbdcd844baa28.png",
    rating: 5,
    text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/assets/images/figma_13d1f8e83dbc0f34bfd2aed999007fa6b98dad04.png",
    rating: 5,
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/assets/images/figma_63c4be83222c85e6c852819bc5d4b24a87a87fb6.png",
    rating: 5,
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/assets/images/figma_9ef8cb329b949267cc8214b6727067c4a13af4b4.png",
    rating: 5,
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

export default function CourseReviewsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All rating");

  return (
    <div className={styles.wrapper}>
      <div className={styles.stage}>
        {/* Top Hero Banner */}
        <CourseHeroBanner />

        {/* Floating Sidebar Card at (908, 416) */}
        <div className={styles.sidebarWrapper}>
          <CourseSidebarCard />
        </div>

        {/* Left Column Content at (120, 1036) */}
        <div className={styles.leftColContent}>
          {/* Tabs */}
          <CourseNavTabs activeTab="reviews" />

          {/* Heading & Intro */}
          <div className={styles.introBlock}>
            <h2 className={styles.sectionHeader}>What Learners Are Saying</h2>
            <p className={styles.sectionDesc}>
              Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
            </p>
          </div>

          {/* Overall Rating Card (723 x 226) */}
          <div className={styles.ratingSummaryCard}>
            <div className={styles.ratingScoreBox}>
              <span className={styles.ratingsLabel}>Ratings</span>
              <span className={styles.scoreNumber}>4.7</span>
            </div>

            <div className={styles.ratingBarsList}>
              {RATING_BREAKDOWN.map((item, idx) => (
                <div key={idx} className={styles.barRow}>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: `${item.percent}%` }}></div>
                  </div>
                  <div className={styles.rowStars}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} width="20" height="20" viewBox="0 0 24 24" fill="#4b4c53" aria-hidden="true">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className={styles.barCount}>{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Reviews Filter Bar */}
          <div className={styles.filterSection}>
            <h2 className={styles.sectionHeader}>Individual Reviews:</h2>
            <div className={styles.filterTabsRow}>
              {["All rating", "5", "4", "3", "2", "1"].map((f) => (
                <button
                  key={f}
                  onClick={() => setSelectedFilter(f)}
                  className={`${styles.filterPill} ${
                    selectedFilter === f ? styles.filterPillActive : ""
                  }`}
                >
                  {f === "All rating" ? (
                    f
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#4b4c53" aria-hidden="true">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      <span>{f}</span>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Reviews List */}
          <div className={styles.reviewsList}>
            {REVIEWS.map((rev, idx) => (
              <div key={idx} className={styles.reviewCard}>
                <div className={styles.reviewerRow}>
                  <div className={styles.reviewerMetaCol}>
                    <div className={styles.reviewerProfile}>
                      <Image
                        src={rev.avatar}
                        alt={rev.name}
                        width={52}
                        height={52}
                        className={styles.reviewerAvatar}
                        unoptimized
                      />
                      <div className={styles.nameCol}>
                        <span className={styles.reviewerName}>{rev.name}</span>
                        <span className={styles.reviewerRole}>{rev.role}</span>
                      </div>
                    </div>

                    <div className={styles.starsRow}>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} width="20" height="20" viewBox="0 0 24 24" fill="#4b4c53" aria-hidden="true">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <span className={styles.reviewDate}>{rev.time}</span>
                </div>

                <p className={styles.reviewBody}>{rev.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer at y: 2924 */}
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
