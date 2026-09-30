"use client";

import React from "react";
import Link from "next/link";
import styles from "./CourseNavTabs.module.css";

interface CourseNavTabsProps {
  activeTab: "about" | "lessons" | "reviews";
}

export default function CourseNavTabs({ activeTab }: CourseNavTabsProps) {
  return (
    <div className={styles.tabsRow}>
      <Link
        href="/course-details"
        className={`${styles.tab} ${activeTab === "about" ? styles.tabActive : ""}`}
      >
        About
      </Link>
      <Link
        href="/course-lessons"
        className={`${styles.tab} ${activeTab === "lessons" ? styles.tabActive : ""}`}
      >
        Lessons
      </Link>
      <Link
        href="/course-reviews"
        className={`${styles.tab} ${activeTab === "reviews" ? styles.tabActive : ""}`}
      >
        Reviews
      </Link>
    </div>
  );
}
