"use client";

import React from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import GridBackground from "@/components/GridBackground";
import styles from "./CourseHeroBanner.module.css";

export default function CourseHeroBanner() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroStage}>
        {/* Navigation Header */}
        <PageHeader activeNav="courses" />

        {/* Grid Background */}
        <GridBackground height={957} width={1440} />


        {/* Course Header Info at (122, 172) */}
        <div className={styles.courseHeaderInfo}>
          <div className={styles.titleCol}>
            <div className={styles.titleWrap}>
              <h1 className={styles.courseTitle}>
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className={styles.courseSubtitle}>
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
            </div>
            <p className={styles.courseAuthor}>
              by <span className={styles.authorGreen}>purepearl studio</span>
            </p>

            {/* Badges / Meta Pills */}
            <div className={styles.metaPillsRow}>
              {/* Intermediate */}
              <div className={styles.whitePill}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#003be2" aria-hidden="true">
                  <path d="M5 14h3v6H5v-6zm6-5h3v11h-3V9zm6-5h3v16h-3V4z" />
                </svg>
                <span>Intermediate</span>
              </div>

              {/* 4.8 (172 reviews) */}
              <div className={styles.whitePill}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M10 1L12.79 6.65L19 7.55L14.5 11.94L15.56 18.13L10 15.21L4.44 18.13L5.5 11.94L1 7.55L7.21 6.65L10 1Z"
                    fill="#003be2"
                  />
                </svg>
                <span>4.8 (172 reviews)</span>
              </div>

              {/* 199 Students */}
              <div className={styles.whitePill}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#003be2" aria-hidden="true">
                  <path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z" />
                  <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24z" />
                  <path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                  <path d="M9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3l0-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z" />
                </svg>
                <span>199 Students</span>
              </div>
            </div>
          </div>

          {/* Share Button at x: 1283 */}
          <button className={styles.shareBtn} aria-label="Share this course">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#242528" aria-hidden="true">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
            </svg>
            <span>Share</span>
          </button>
        </div>

        {/* Video Player / Thumbnail Preview at (125, 416, size 720x479) */}
        <div className={styles.videoPlayerCard}>
          <Image
            src="/assets/images/figma_71d7929ee0ecb2198c9955a8e842f4991dcb4655.png"
            alt="Course Video Preview"
            width={720}
            height={479}
            className={styles.videoThumbnail}
            priority
            unoptimized
          />
          <button className={styles.playButton} aria-label="Play course preview">
            <div className={styles.playIconInner}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#003be2">
                <path d="M8 5V19L19 12L8 5Z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
