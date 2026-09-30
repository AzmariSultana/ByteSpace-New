"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "./Header";
import GridBackground from "./GridBackground";
import styles from "./Hero.module.css";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroStage}>
        {/* Exact Background Grid matching Figma 12:224 Group 4 */}
        <GridBackground height={1024} width={1440} opacity={0.12} />

        {/* Header inside Hero Frame */}
        <Header />

        {/* 3D Floating Ornaments */}
        {/* 1. Top-Left Lime Spring (Figma 46:90) */}
        <div className={`${styles.ornament} ${styles.ornamentTopLeft}`}>
          <Image
            src="/assets/images/hero-spring-lime-sharp.png"
            alt=""
            width={385}
            height={385}
            unoptimized
            priority
          />
        </div>

        {/* 2. Mid-Left White Squiggle (Figma 46:95) */}
        <div className={`${styles.ornament} ${styles.ornamentMidLeft}`}>
          <Image
            src="/assets/images/hero-squiggle-white-sharp.png"
            alt=""
            width={175}
            height={175}
            unoptimized
            priority
          />
        </div>

        {/* 3. Bottom-Left White Torus (Figma 46:105, unbroken ring) */}
        <div className={`${styles.ornament} ${styles.ornamentBottomLeft}`}>
          <Image
            src="/assets/images/hero-torus-white-sharp.png"
            alt=""
            width={342}
            height={342}
            unoptimized
            priority
          />
        </div>

        {/* 4. Top-Right Lime Cylinder (Figma 46:110) */}
        <div className={`${styles.ornament} ${styles.ornamentTopRight}`}>
          <Image
            src="/assets/images/hero-cylinder-lime-sharp.png"
            alt=""
            width={370}
            height={370}
            unoptimized
            priority
          />
        </div>

        {/* 5. Mid-Right White Tetrahedron (Figma 46:80) */}
        <div className={`${styles.ornament} ${styles.ornamentMidRight}`}>
          <Image
            src="/assets/images/hero-tetrahedron-white-sharp.png"
            alt=""
            width={188}
            height={188}
            unoptimized
            priority
          />
        </div>

        {/* 6. Bottom-Right White Coil (Figma 46:85) */}
        <div className={`${styles.ornament} ${styles.ornamentBottomRight}`}>
          <Image
            src="/assets/images/hero-coil-white-sharp.png"
            alt=""
            width={330}
            height={330}
            unoptimized
            priority
          />
        </div>

        {/* Giant Lime Green Backdrop Hollow Ring (Ellipse 7 in Figma: 1149x1149, 320px inside stroke, hollow center) */}
        <div className={styles.limeBackdropRing} />

        {/* Center Student Photo */}
        <div className={styles.studentImageWrapper}>
          <Image
            src="/assets/images/hero-student.png"
            alt="Student with course materials"
            width={578}
            height={541}
            className={styles.studentImg}
            priority
          />
        </div>

        {/* Floating Badge 1: UI/UX Design */}
        <div className={styles.badgeUiUx}>
          <div className={styles.badgeUiUxTitle}>UI/UX Design</div>
          <div className={styles.badgeUiUxMeta}>
            <span>200 Courses</span>
            <span className={styles.dot}>•</span>
            <span>1000+ Students</span>
          </div>
        </div>

        {/* Floating Badge 2: Learning Progress */}
        <div className={styles.badgeProgress}>
          <div className={styles.badgeProgressLabel}>Learning Progress</div>
          <div className={styles.badgeProgressValue}>55%</div>
          <div className={styles.progressTrack}>
            <div className={styles.progressBar} />
          </div>
        </div>

        {/* Floating Badge 3: Happy Students */}
        <div className={styles.badgeStudents}>
          <div className={styles.badgeStudentsTitle}>Happy Students</div>
          <div className={styles.badgeStudentsRating}>
            <span className={styles.ratingScore}>4.5</span>
            <span className={styles.ratingCount}>(240)</span>
            <svg
              className={styles.starIcon}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#d4fb20"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>

          {/* Overlapping Avatar Stack */}
          <div className={styles.avatarStack}>
            <Image
              src="/assets/images/avatar-1.png"
              alt="Student"
              width={43}
              height={43}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-2.png"
              alt="Student"
              width={43}
              height={43}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-3.png"
              alt="Student"
              width={43}
              height={43}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-4.png"
              alt="Student"
              width={43}
              height={43}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-5.png"
              alt="Student"
              width={43}
              height={43}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-6.png"
              alt="Student"
              width={43}
              height={43}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-7.png"
              alt="Student"
              width={43}
              height={43}
              className={styles.avatarItem}
            />
            <div className={styles.avatarCount}>2K+</div>
          </div>
        </div>

        {/* Hero Text Content (Title, Subtitle, Search) */}
        <h1 className={styles.heroTitle}>
          <span className={styles.titleLine}>Get Access to Hundreds</span>
          <span className={styles.titleLine}>Courses Available</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <div className={styles.searchInputPill}>
            <svg
              className={styles.searchIcon}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#82868e"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Course, topic, creator"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.searchBtn}>
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
