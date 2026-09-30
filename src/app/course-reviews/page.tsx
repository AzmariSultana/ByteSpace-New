"use client";

import React, { useState } from "react";
import Image from "next/image";
import CourseHeroBanner from "@/components/CourseHeroBanner";
import CourseSidebarCard from "@/components/CourseSidebarCard";
import CourseNavTabs from "@/components/CourseNavTabs";
import Footer from "@/components/Footer";
import styles from "./CourseReviews.module.css";

const RATING_BREAKDOWN = [
  { stars: 5, count: 720, percent: 80 },
  { stars: 4, count: 120, percent: 15 },
  { stars: 3, count: 21, percent: 5 },
  { stars: 2, count: 12, percent: 2 },
  { stars: 1, count: 16, percent: 2 },
];

const REVIEWS = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/assets/images/avatar-1.png",
    rating: 5,
    text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/assets/images/avatar-2.png",
    rating: 5,
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/assets/images/avatar-3.png",
    rating: 5,
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/assets/images/avatar-4.png",
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
              <span className={styles.scoreNumber}>4.7</span>
              <div className={styles.scoreStars}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 1L10.23 5.52L15.22 6.24L11.61 9.75L12.46 14.72L8 12.38L3.54 14.72L4.39 9.75L0.78 6.24L5.77 5.52L8 1Z"
                      fill="#003be2"
                    />
                  </svg>
                ))}
              </div>
              <span className={styles.scoreCount}>240 reviews</span>
            </div>

            <div className={styles.ratingBarsList}>
              {RATING_BREAKDOWN.map((item) => (
                <div key={item.stars} className={styles.barRow}>
                  <div className={styles.starLabel}>
                    <span>{item.stars}</span>
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 1L12.79 6.65L19 7.55L14.5 11.94L15.56 18.13L10 15.21L4.44 18.13L5.5 11.94L1 7.55L7.21 6.65L10 1Z"
                        fill="#003be2"
                      />
                    </svg>
                  </div>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: `${item.percent}%` }}></div>
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
                      <span>{f}</span>
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M10 1L12.79 6.65L19 7.55L14.5 11.94L15.56 18.13L10 15.21L4.44 18.13L5.5 11.94L1 7.55L7.21 6.65L10 1Z"
                          fill="#003be2"
                        />
                      </svg>
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
                  <div className={styles.reviewerMeta}>
                    <Image
                      src={rev.avatar}
                      alt={rev.name}
                      width={52}
                      height={52}
                      className={styles.reviewerAvatar}
                    />
                    <div className={styles.nameCol}>
                      <span className={styles.reviewerName}>{rev.name}</span>
                      <span className={styles.reviewerRole}>{rev.role}</span>
                    </div>
                  </div>

                  <div className={styles.reviewerRatingCol}>
                    <div className={styles.starsRow}>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M8 1L10.23 5.52L15.22 6.24L11.61 9.75L12.46 14.72L8 12.38L3.54 14.72L4.39 9.75L0.78 6.24L5.77 5.52L8 1Z"
                            fill="#003be2"
                          />
                        </svg>
                      ))}
                    </div>
                    <span className={styles.reviewDate}>{rev.time}</span>
                  </div>
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
