"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import GridBackground from "@/components/GridBackground";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import styles from "./CreatorProfile.module.css";

const CREATOR_COURSES = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-1.png",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-2.png",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-3.png",
  },
  {
    id: 4,
    title: "Balancing Productivity and Self-Care",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-4.png",
  },
  {
    id: 5,
    title: "Mastering Money Management",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-5.png",
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-6.png",
  },
];

export default function CreatorProfilePage() {
  const [following, setFollowing] = useState(false);

  return (
    <div className={styles.wrapper}>
      {/* Creator Profile Hero Banner (1440 x 592) */}
      <section className={styles.heroSection}>
        <div className={styles.heroStage}>
          {/* Header */}
          <PageHeader activeNav="creators" />

          {/* Grid Background */}
          <GridBackground height={592} width={1440} />

          {/* Creator Profile Header Info at (122, 172) */}
          <div className={styles.creatorHeaderContent}>
            {/* Top row: Avatar + Name/Role */}
            <div className={styles.creatorBioRow}>
              <div className={styles.avatarWrap}>
                <Image
                  src="/assets/images/figma_b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png"
                  alt="PurePearl Studio"
                  width={96}
                  height={96}
                  className={styles.creatorAvatar}
                  priority
                />
              </div>

              <div className={styles.creatorTitleGroup}>
                <div className={styles.nameRow}>
                  <h1 className={styles.creatorName}>PurePearl Studio</h1>
                  <span className={styles.creatorBadge}>Creator</span>
                </div>
                <p className={styles.creatorTagline}>
                  Passionate UI/UX, Web designer
                </p>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className={styles.creatorBio}>
              Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
              <br />
              Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>

            {/* Bottom Row: Stats pills + Follow button at y: 464 */}
            <div className={styles.statsActionsRow}>
              <div className={styles.statsGroup}>
                <div className={styles.statPill}>
                  <span className={styles.statNum}>3</span>
                  <span className={styles.statLabel}>Products</span>
                </div>
                <div className={styles.statPill}>
                  <span className={styles.statNum}>12</span>
                  <span className={styles.statLabel}>Followers</span>
                </div>
              </div>

              <button
                className={styles.followBtn}
                onClick={() => setFollowing(!following)}
              >
                {following ? "Following" : "Follow"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section (60:1928, height 1019) */}
      <section className={styles.coursesSection}>
        <div className={styles.coursesStage}>
          {/* Filter Bar at (119, 654 -> 62px from section top) */}
          <div className={styles.filterBar}>
            <div className={styles.filterLeft}>
              <button className={styles.filterPill}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6H20M7 12H17M10 18H14" stroke="#242528" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Filter</span>
              </button>

              <button className={styles.filterPill}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 14H6V17H4V14ZM9 10H11V17H9V10ZM14 6H16V17H14V6Z" fill="#242528" />
                </svg>
                <span>Level</span>
              </button>

              <button className={styles.filterPill}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H10V10H4V4ZM14 4H20V10H14V4ZM4 14H10V20H4V14ZM14 14H20V20H14V14Z" stroke="#242528" strokeWidth="2" />
                </svg>
                <span>Category</span>
              </button>
            </div>

            <div className={styles.filterRight}>
              <button className={styles.relevantPill}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6H21M6 12H18M9 18H15" stroke="#242528" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Most relevant</span>
              </button>
            </div>
          </div>

          {/* 6 Course Cards Grid at (119, 742 -> 150px from section top) */}
          <div className={styles.courseGrid}>
            {CREATOR_COURSES.map((course, idx) => (
              <CourseCard
                key={`${course.title}-${idx}`}
                id={course.id}
                title={course.title}
                author={course.author}
                price={course.price}
                rating={course.rating}
                imageSrc={course.imageSrc}
                priceColor="#003be2"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer (1440 x 525) */}
      <Footer />
    </div>
  );
}
