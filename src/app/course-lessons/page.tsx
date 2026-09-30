"use client";

import React from "react";
import CourseHeroBanner from "@/components/CourseHeroBanner";
import CourseSidebarCard from "@/components/CourseSidebarCard";
import CourseNavTabs from "@/components/CourseNavTabs";
import Footer from "@/components/Footer";
import styles from "./CourseLessons.module.css";

const MODULES = [
  {
    num: "01",
    title: "Module 1: Introduction to Digital Assets",
    desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    num: "02",
    title: "Module 2: Design Principles for Impact",
    desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    num: "03",
    title: "Module 4: User-Centric Design Strategies",
    desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    num: "04",
    title: "Module 5: Interactive Media and Engagement",
    desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    num: "05",
    title: "Module 6: Project Showcase and Critique",
    desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    num: "06",
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export default function CourseLessonsPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stage}>
        {/* Top Hero Banner */}
        <CourseHeroBanner />

        {/* Floating Sidebar Card at (908, 416) */}
        <div className={styles.sidebarWrapper}>
          <CourseSidebarCard />
        </div>

        {/* Left Column Content at (120, 1036) */}
        <div className={styles.leftColContent}>
          {/* Tabs */}
          <CourseNavTabs activeTab="lessons" />

          {/* Explore the Modules */}
          <div className={styles.exploreBlock}>
            <h2 className={styles.sectionHeader}>Explore the Modules</h2>
            <p className={styles.sectionDesc}>
              Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
            </p>
          </div>

          {/* Lesson List */}
          <div className={styles.lessonListBlock}>
            <h2 className={styles.sectionHeader}>Lesson List</h2>
            <div className={styles.modulesList}>
              {MODULES.map((mod) => (
                <div key={mod.num} className={styles.moduleCard}>
                  <div className={styles.modNumBox}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="#242528" aria-hidden="true">
                      <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM15 16H5V8h10v8z" />
                    </svg>
                  </div>
                  <div className={styles.modInfo}>
                    <h3 className={styles.modTitle}>{mod.title}</h3>
                    <p className={styles.modDesc}>{mod.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lesson Content */}
          <div className={styles.contentInfoBlock}>
            <h2 className={styles.sectionHeader}>Lesson Content</h2>
            <p className={styles.sectionDesc}>
              Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
            </p>
          </div>

          {/* Lesson Progress Tracking */}
          <div className={styles.progressBlock}>
            <h2 className={styles.sectionHeader}>Lesson Progress Tracking</h2>
            <p className={styles.sectionDesc}>
              Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
            </p>

            <div className={styles.progressCard}>
              <span className={styles.progressTitle}>Learning Progress</span>
              <span className={styles.progressPercent}>55%</span>
              <div className={styles.progressBarTrack}>
                <div className={styles.progressBarFill} style={{ width: "55%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer at y: 2358 */}
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
