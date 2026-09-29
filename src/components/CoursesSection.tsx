"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    author: "by purepearl studio",
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
    author: "by purepearl studio",
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
    author: "by purepearl studio",
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
    author: "by purepearl studio",
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
    author: "by purepearl studio",
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
    author: "by purepearl studio",
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
  const [savedCourses, setSavedCourses] = useState<{ [key: number]: boolean }>({});

  const toggleSave = (id: number) => {
    setSavedCourses((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="courses" className={styles.coursesSection}>
      <div className="container">
        {/* Intro Header */}
        <div className={styles.intro}>
          <h2 className={styles.title}>
            Discover Your Passion, Build Your Skills
          </h2>
          <p className={styles.description}>
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from technology
            to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* 3 Rows of Category Filter Pills */}
        <div className={styles.tabsContainer}>
          {/* Row 1 */}
          <div className={styles.tabRow}>
            {row1Tabs.map((tab) => (
              <button
                key={tab}
                className={`${styles.tabPill} ${
                  activeTab === tab ? styles.tabPillActive : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className={styles.tabRow}>
            {row2Tabs.map((tab) => (
              <button
                key={tab}
                className={`${styles.tabPill} ${
                  activeTab === tab ? styles.tabPillActive : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Row 3 */}
          <div className={styles.tabRow}>
            {row3Tabs.map((tab) => (
              <button
                key={tab}
                className={`${styles.tabPill} ${
                  activeTab === tab ? styles.tabPillActive : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
            <span className={styles.moreLink}>+ More</span>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className={styles.coursesGrid}>
          {courses.map((course) => (
            <article key={course.id} className={styles.courseCard}>
              {/* Card Thumbnail with metadata badges */}
              <div className={styles.thumbnailWrapper}>
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className={styles.thumbnailImg}
                />
                <div className={styles.thumbnailBadges}>
                  <span className={styles.thumbnailBadge}>{course.lessons}</span>
                  <span className={styles.thumbnailBadge}>{course.duration}</span>
                  <span className={styles.thumbnailBadge}>{course.comments}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.cardTitle}>{course.title}</h3>
                    <div className={styles.ratingGroup}>
                      <span className={styles.ratingValue}>{course.rating}</span>
                      <svg
                        className={styles.starIcon}
                        viewBox="0 0 24 24"
                        fill="#ced0d3"
                        width="16"
                        height="16"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                  </div>
                  <span className={styles.cardAuthor}>{course.author}</span>
                </div>

                {/* Level + Avatar Stack */}
                <div className={styles.cardMeta}>
                  <div className={styles.levelPill}>
                    <svg
                      className={styles.levelIcon}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M2 13h3v5H2v-5zm6-5h3v10H8V8zm6-6h3v16h-3V2z" />
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
                        className={styles.cardAvatarItem}
                      />
                    ))}
                    <div className={styles.cardAvatarCount}>
                      {course.studentCount}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price */}
                <div className={styles.cardFooter}>
                  <div className={styles.priceGroup}>
                    <span className={styles.priceValue}>{course.price}</span>
                    <span className={styles.priceUnit}>{course.priceUnit}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
