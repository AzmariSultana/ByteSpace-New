"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CoursesSection.module.css";

const row1Tabs = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
];

const row2Tabs = [
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
];

const row3Tabs = [
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const courses = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    displayTitle: "Learn Figma from Basic",
    authorPrefix: "by ",
    authorName: "purepearl studio",
    thumbnail: "/assets/images/course-1.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    studentAvatars: [
      "/assets/images/avatar-2.png",
      "/assets/images/avatar-8.png",
      "/assets/images/testimonial-1.png",
      "/assets/images/avatar-9.png",
    ],
    studentCount: "26+",
    price: "$25",
    priceUnit: "/lifetime",
    rating: "4.5",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    displayTitle: "Build Digital Asset",
    authorPrefix: "by ",
    authorName: "purepearl studio",
    thumbnail: "/assets/images/course-2.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    studentAvatars: [
      "/assets/images/avatar-2.png",
      "/assets/images/avatar-8.png",
      "/assets/images/testimonial-1.png",
      "/assets/images/avatar-9.png",
    ],
    studentCount: "26+",
    price: "$25",
    priceUnit: "/lifetime",
    rating: "4.5",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    displayTitle: "the Power of Big Data",
    authorPrefix: "by ",
    authorName: "purepearl studio",
    thumbnail: "/assets/images/course-3.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    studentAvatars: [
      "/assets/images/avatar-2.png",
      "/assets/images/avatar-8.png",
      "/assets/images/testimonial-1.png",
      "/assets/images/avatar-9.png",
    ],
    studentCount: "26+",
    price: "$25",
    priceUnit: "/lifetime",
    rating: "4.5",
  },
  {
    id: 4,
    title: "Balancing Productivity and Self-Care",
    displayTitle: "Balancing Productivity an...",
    authorPrefix: "by ",
    authorName: "purepearl studio",
    thumbnail: "/assets/images/course-4.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    studentAvatars: [
      "/assets/images/avatar-2.png",
      "/assets/images/avatar-8.png",
      "/assets/images/testimonial-1.png",
      "/assets/images/avatar-9.png",
    ],
    studentCount: "26+",
    price: "$25",
    priceUnit: "/lifetime",
    rating: "4.5",
  },
  {
    id: 5,
    title: "Mastering Money Management",
    displayTitle: "Mastering Money Manage...",
    authorPrefix: "by ",
    authorName: "purepearl studio",
    thumbnail: "/assets/images/course-5.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    studentAvatars: [
      "/assets/images/avatar-2.png",
      "/assets/images/avatar-8.png",
      "/assets/images/testimonial-1.png",
      "/assets/images/avatar-9.png",
    ],
    studentCount: "26+",
    price: "$25",
    priceUnit: "/lifetime",
    rating: "4.5",
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    displayTitle: "From Idea to Startup Succ...",
    authorPrefix: "by ",
    authorName: "purepearl studio",
    thumbnail: "/assets/images/course-6.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    studentAvatars: [
      "/assets/images/avatar-2.png",
      "/assets/images/avatar-8.png",
      "/assets/images/testimonial-1.png",
      "/assets/images/avatar-9.png",
    ],
    studentCount: "26+",
    price: "$25",
    priceUnit: "/lifetime",
    rating: "4.5",
  },
];

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <section id="courses" className={styles.coursesSection} aria-label="Discover Your Passion, Build Your Skills">
      <div className={styles.coursesStage}>
        {/* Intro Header (Frame 3 / 12:101: 917x180 at relX:261.5, relY:72) */}
        <div className={styles.intro}>
          <h2 className={styles.title}>
            Discover Your Passion,<br />Build Your Skills
          </h2>
          <p className={styles.description}>
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* 3 Rows of Category Filter Pills */}
        <div className={styles.tabsContainer}>
          {/* Row 1 (Tab_Categories / 21:33: 1086x43 at relY:294) */}
          <div className={styles.tabRow1}>
            {row1Tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`${styles.tabPill} ${
                  activeTab === tab ? styles.tabPillActive : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Row 2 (Frame 6 / 21:56: 952x43 at relY:358) */}
          <div className={styles.tabRow2}>
            {row2Tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`${styles.tabPill} ${
                  activeTab === tab ? styles.tabPillActive : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Row 3 (Frame 7 / 21:63: 622x43 at relY:422) */}
          <div className={styles.tabRow3}>
            {row3Tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`${styles.tabPill} ${
                  activeTab === tab ? styles.tabPillActive : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
            <Link href="/search" className={styles.moreLink}>
              + More
            </Link>
          </div>
        </div>

        {/* Course Cards Grid (Frame 8 / 33:683: 1199x808 at relX:120.5, relY:542) */}
        <div className={styles.coursesGrid}>
          {courses.map((course) => (
            <Link
              key={course.id}
              href="/course-details"
              className={styles.courseCard}
              aria-label={course.title}
            >
              {/* Card Thumbnail (341x195 at relX:136, relY:486) */}
              <div className={styles.thumbnailWrapper}>
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  width={341}
                  height={195}
                  priority
                  unoptimized
                  className={styles.thumbnailImg}
                />
                {/* Badges (Auto Layout Horizontal / 13:251: relX:149, relY:636) */}
                <div className={styles.thumbnailBadges}>
                  <span className={styles.thumbnailBadge}>{course.lessons}</span>
                  <span className={styles.thumbnailBadge}>{course.duration}</span>
                  <span className={styles.thumbnailBadge}>{course.comments}</span>
                </div>
              </div>

              {/* Card Body (341x131 at relX:136, relY:702) */}
              <div className={styles.cardBody}>
                {/* Header: Title & Rating Row */}
                <div className={styles.cardHeader}>
                  <div className={styles.titleAndAuthor}>
                    <h3 className={styles.cardTitle} title={course.title}>
                      {course.displayTitle}
                    </h3>
                    <div className={styles.cardAuthor}>
                      <span>{course.authorPrefix}</span>
                      <span className={styles.authorName}>{course.authorName}</span>
                    </div>
                  </div>
                  <div className={styles.ratingGroup}>
                    <span className={styles.ratingValue}>{course.rating}</span>
                    <svg
                      className={styles.starIcon}
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M6.31607 0.356149C6.4716 -0.118876 7.1436 -0.118875 7.29913 0.356151L8.55906 4.20408C8.62852 4.4162 8.82622 4.55984 9.04942 4.56035L13.0984 4.56953C13.5982 4.57067 13.8059 5.20977 13.4021 5.50449L10.1319 7.89182C9.9516 8.02343 9.87609 8.25584 9.94458 8.46827L11.187 12.3219C11.3404 12.7976 10.7968 13.1926 10.3917 12.8997L7.11066 10.5272C6.92979 10.3965 6.68541 10.3965 6.50454 10.5272L3.22348 12.8997C2.81844 13.1926 2.27478 12.7976 2.42816 12.3219L3.67062 8.46827C3.73911 8.25584 3.6636 8.02343 3.48332 7.89182L0.213058 5.50448C-0.190654 5.20977 0.0170039 4.57067 0.516844 4.56953L4.56578 4.56035C4.78898 4.55984 4.98668 4.4162 5.05614 4.20408L6.31607 0.356149Z"
                        fill="#ced0d3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Level + Avatar Stack (Auto Layout Horizontal / 13:262: relX:136, relY:761) */}
                <div className={styles.cardMeta}>
                  <div className={styles.levelPill}>
                    <svg
                      className={styles.levelIcon}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <rect x="3.75" y="12.2" width="2.5" height="4.5" rx="1.25" fill="#4B4C53" />
                      <rect x="8.75" y="7.8" width="2.5" height="8.9" rx="1.25" fill="#4B4C53" />
                      <rect x="13.75" y="3.4" width="2.5" height="13.3" rx="1.25" fill="#4B4C53" />
                    </svg>
                    <span>{course.level}</span>
                  </div>

                  <div className={styles.cardAvatarStack}>
                    {course.studentAvatars.map((av, i) => (
                      <Image
                        key={i}
                        src={av}
                        alt="Enrolled student"
                        width={32}
                        height={32}
                        priority
                        unoptimized
                        className={styles.cardAvatarItem}
                      />
                    ))}
                    <div className={styles.cardAvatarCount}>
                      {course.studentCount}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price (Auto Layout Horizontal / 13:273: relX:136, relY:809) */}
                <div className={styles.cardFooter}>
                  <span className={styles.priceValue}>{course.price}</span>
                  <span className={styles.priceUnit}>{course.priceUnit}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
