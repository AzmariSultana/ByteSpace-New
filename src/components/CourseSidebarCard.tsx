"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CourseSidebarCard.module.css";

const PREVIEW_VIDEOS = [
  { title: "Introduction to Digital Asset", duration: "05:24" },
  { title: "Understanding the Landscape", duration: "12:40" },
  { title: "Tools & Technologies", duration: "18:15" },
];

const INCLUDED_ITEMS = [
  "Learning Resources",
  "Quality Lesson Videos",
  "Certificate of Completion",
  "Private Consultation",
];

export default function CourseSidebarCard() {
  return (
    <aside className={styles.sidebarCard}>
      {/* Lessons count & preview */}
      <div className={styles.sectionTop}>
        <h3 className={styles.lessonCountHeader}>112 Lessons (24 hours)</h3>
        <div className={styles.previewVideoList}>
          {PREVIEW_VIDEOS.map((vid, idx) => (
            <div key={idx} className={styles.videoRow}>
              <div className={styles.videoLeft}>
                <div className={styles.playIconSmall}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#242528">
                    <path d="M8 5V19L19 12L8 5Z" />
                  </svg>
                </div>
                <span className={styles.videoTitle}>{vid.title}</span>
              </div>
              <span className={styles.videoDuration}>{vid.duration}</span>
            </div>
          ))}
          <p className={styles.moreVideosText}>99 more videos</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <p className={styles.ctaPrompt}>
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <div className={styles.priceRow}>
          <span className={styles.priceAmount}>$25</span>
          <span className={styles.priceLifetime}>/lifetime</span>
        </div>

        <button className={styles.enrollBtn}>Enroll Now</button>
      </div>

      {/* Course Includes */}
      <div className={styles.includesSection}>
        <h4 className={styles.includesTitle}>This course include</h4>
        <div className={styles.includesList}>
          {INCLUDED_ITEMS.map((item, idx) => (
            <div key={idx} className={styles.includeRow}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#242528" strokeWidth="2" />
                <path d="M8.5 12L10.5 14L15.5 9" stroke="#242528" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className={styles.includeText}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.divider}></div>

      {/* Creator Mini Profile */}
      <div className={styles.creatorProfile}>
        <div className={styles.creatorHeader}>
          <Image
            src="/assets/images/figma_bfd09b20f2cf44bfa3af771f6396363d4ae67aab.png"
            alt="purepearl studio"
            width={52}
            height={52}
            className={styles.creatorAvatar}
            unoptimized
          />
          <div className={styles.creatorMeta}>
            <span className={styles.creatorName}>purepearl studio</span>
            <span className={styles.creatorRole}>Senior Digital Creator</span>
          </div>
        </div>

        <p className={styles.creatorBio}>
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <Link href="/creator-profile" className={styles.profileBtn}>
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}
