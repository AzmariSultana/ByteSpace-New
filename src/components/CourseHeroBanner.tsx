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

        {/* 3D Floating Ornaments */}
        <div className={styles.ornamentTopLeft}>
          <Image
            src="/assets/images/figma_f1057d714a93edf29b02a9dbdb4fc552fd7ab847.png"
            alt=""
            width={332}
            height={331}
            priority
            unoptimized
          />
        </div>
        <div className={styles.ornamentBottomLeft}>
          <Image
            src="/assets/images/figma_6be36b89bfec399afb445a39d9bf4cb181332d48.png"
            alt=""
            width={188}
            height={188}
            priority
            unoptimized
          />
        </div>
        <div className={styles.ornamentTopRight}>
          <Image
            src="/assets/images/figma_d5e9c4dc379dbf3d1f6679a4423483f6766a7931.png"
            alt=""
            width={222}
            height={222}
            priority
            unoptimized
          />
        </div>
        <div className={styles.ornamentBottomRight}>
          <Image
            src="/assets/images/figma_24321b8894c48b04befaa9e71f204daacc40bbc4.png"
            alt=""
            width={357}
            height={356}
            priority
            unoptimized
          />
        </div>

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
            <p className={styles.courseAuthor}>by purepearl studio</p>

            {/* Badges / Meta Pills */}
            <div className={styles.metaPillsRow}>
              <div className={styles.whitePill}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 1L12.79 6.65L19 7.55L14.5 11.94L15.56 18.13L10 15.21L4.44 18.13L5.5 11.94L1 7.55L7.21 6.65L10 1Z"
                    fill="#003be2"
                  />
                </svg>
                <span>4.5 (240)</span>
              </div>

              <div className={styles.whitePill}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 14H6V17H4V14ZM9 10H11V17H9V10ZM14 6H16V17H14V6Z" fill="#242528" />
                </svg>
                <span>Beginner</span>
              </div>

              <div className={styles.whitePill}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4H10V10H4V4ZM14 4H20V10H14V4ZM4 14H10V20H4V14ZM14 14H20V20H14V14Z" stroke="#242528" strokeWidth="2" />
                </svg>
                <span>UI/UX Design</span>
              </div>
            </div>
          </div>

          {/* Share Button at x: 1283 */}
          <button className={styles.shareBtn} aria-label="Share this course">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12M16 6L12 2M12 2L8 6M12 2V15"
                stroke="#242528"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
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
