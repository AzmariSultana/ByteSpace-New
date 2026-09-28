"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className={styles.heroSection}>
      {/* 3D Floating Ornaments on Left */}
      <div className={`${styles.ornament} ${styles.ornamentLeft1}`}>
        <Image
          src="/assets/images/ornament-sphere-blue.png"
          alt=""
          width={160}
          height={160}
          priority
        />
      </div>
      <div className={`${styles.ornament} ${styles.ornamentLeft2}`}>
        <Image
          src="/assets/images/ornament-cone-lime.png"
          alt=""
          width={170}
          height={170}
          priority
        />
      </div>
      <div className={`${styles.ornament} ${styles.ornamentLeft3}`}>
        <Image
          src="/assets/images/ornament-cone-white-1.png"
          alt=""
          width={180}
          height={180}
          priority
        />
      </div>

      {/* 3D Floating Ornaments on Right */}
      <div className={`${styles.ornament} ${styles.ornamentRight1}`}>
        <Image
          src="/assets/images/ornament-torus.png"
          alt=""
          width={160}
          height={160}
          priority
        />
      </div>
      <div className={`${styles.ornament} ${styles.ornamentRight2}`}>
        <Image
          src="/assets/images/ornament-cone-lime-1.png"
          alt=""
          width={180}
          height={180}
          priority
        />
      </div>
      <div className={`${styles.ornament} ${styles.ornamentRight3}`}>
        <Image
          src="/assets/images/ornament-3d-1.png"
          alt=""
          width={170}
          height={170}
          priority
        />
      </div>

      {/* Hero Text Content */}
      <div className={`container ${styles.heroContent}`}>
        <h1 className={styles.heroTitle}>
          Get Access to Hundreds Courses Available
        </h1>
        <p className={styles.heroSubtitle}>
          Unlock your creativity, gain valuable knowledge, and grow your business
          with our wide range of courses.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className={styles.searchBar}>
          <div className={styles.searchIcon}>
            <Image
              src="/assets/svgs/icon-search.svg"
              alt="Search"
              width={18}
              height={18}
            />
          </div>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Course, topic, creator"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className={styles.searchBtn}>
            Search
          </button>
        </form>
      </div>

      {/* Visual Center with Student Image and Floating Badges */}
      <div className={styles.visualStage}>
        {/* Floating Badge 1: UI/UX Design */}
        <div className={styles.badgeUiUx}>
          <div className={styles.badgeUiUxTitle}>UI/UX Design</div>
          <div className={styles.badgeUiUxMeta}>
            <span>200 Courses</span>
            <span>•</span>
            <span>1000+ Students</span>
          </div>
        </div>

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
          <div className={styles.badgeStudentsHeader}>
            <div className={styles.badgeStudentsTitle}>Happy Students</div>
            <div className={styles.badgeStudentsRating}>
              <span>4.5 (240)</span>
              <Image
                src="/assets/svgs/icon-star.svg"
                alt="Rating Star"
                width={14}
                height={14}
                className={styles.starIcon}
              />
            </div>
          </div>

          {/* Overlapping Avatar Stack */}
          <div className={styles.avatarStack}>
            <Image
              src="/assets/images/avatar-1.png"
              alt="Student"
              width={38}
              height={38}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-2.png"
              alt="Student"
              width={38}
              height={38}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-3.png"
              alt="Student"
              width={38}
              height={38}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-4.png"
              alt="Student"
              width={38}
              height={38}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-5.png"
              alt="Student"
              width={38}
              height={38}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-6.png"
              alt="Student"
              width={38}
              height={38}
              className={styles.avatarItem}
            />
            <Image
              src="/assets/images/avatar-7.png"
              alt="Student"
              width={38}
              height={38}
              className={styles.avatarItem}
            />
            <div className={styles.avatarCount}>2K+</div>
          </div>
        </div>
      </div>
    </section>
  );
}
