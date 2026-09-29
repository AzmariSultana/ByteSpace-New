"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "./Header";
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
        {/* Header inside Hero Frame */}
        <Header />

        {/* 3D Floating Ornaments */}
        {/* 1. Top-Left Lime Coil */}
        <div className={`${styles.ornament} ${styles.ornamentTopLeft}`}>
          <Image
            src="/assets/images/ornament-spring-lime.png"
            alt=""
            width={195}
            height={267}
            priority
          />
        </div>

        {/* 2. Mid-Left White Squiggle */}
        <div className={`${styles.ornament} ${styles.ornamentMidLeft}`}>
          <Image
            src="/assets/images/ornament-squiggle-white.png"
            alt=""
            width={114}
            height={121}
            priority
          />
        </div>

        {/* 3. Bottom-Left White Torus */}
        <div className={`${styles.ornament} ${styles.ornamentBottomLeft}`}>
          <Image
            src="/assets/images/ornament-torus-perfect.png"
            alt=""
            width={299}
            height={218}
            priority
          />
        </div>

        {/* 4. Top-Right Lime Cylinder */}
        <div className={`${styles.ornament} ${styles.ornamentTopRight}`}>
          <Image
            src="/assets/images/ornament-cylinder-lime.png"
            alt=""
            width={152}
            height={302}
            priority
          />
        </div>

        {/* 5. Mid-Right White Tetrahedron */}
        <div className={`${styles.ornament} ${styles.ornamentMidRight}`}>
          <Image
            src="/assets/images/ornament-tetrahedron.png"
            alt=""
            width={122}
            height={136}
            priority
          />
        </div>

        {/* 6. Bottom-Right White Coil */}
        <div className={`${styles.ornament} ${styles.ornamentBottomRight}`}>
          <Image
            src="/assets/images/ornament-coil-perfect.png"
            alt=""
            width={190}
            height={250}
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
            <span className={styles.ratingText}>4.5 (240)</span>
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
              width={32}
              height={32}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-2.png"
              alt="Student"
              width={32}
              height={32}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-3.png"
              alt="Student"
              width={32}
              height={32}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-4.png"
              alt="Student"
              width={32}
              height={32}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-5.png"
              alt="Student"
              width={32}
              height={32}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-6.png"
              alt="Student"
              width={32}
              height={32}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-7.png"
              alt="Student"
              width={32}
              height={32}
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
