"use client";

import React from "react";
import Image from "next/image";
import CourseHeroBanner from "@/components/CourseHeroBanner";
import CourseSidebarCard from "@/components/CourseSidebarCard";
import CourseNavTabs from "@/components/CourseNavTabs";
import Footer from "@/components/Footer";
import styles from "./CourseDetails.module.css";

const SNEAK_PEEK_IMAGES = [
  "/assets/images/figma_a7c9406fd05787fc6c03edf5db05f212b96366a6.png",
  "/assets/images/figma_d443b5217bfd460249d4ac0712aa129bc29a8919.png",
  "/assets/images/figma_2e1b62a2460ffba94cc633550f3a06e03b29b432.png",
  "/assets/images/figma_0c1762672f5c64aa67de3991c2ac4aa729328623.png",
];

const KEY_POINTS = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

export default function CourseDetailsPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stage}>
        {/* Top Hero Banner (1440 x 957) */}
        <CourseHeroBanner />

        {/* Floating Sidebar Card at (908, 416) */}
        <div className={styles.sidebarWrapper}>
          <CourseSidebarCard />
        </div>

        {/* Left Column Content at (120, 1019.5) */}
        <div className={styles.leftColContent}>
          {/* Tabs */}
          <CourseNavTabs activeTab="about" />

          {/* Description Block */}
          <div className={styles.descBlock}>
            <h2 className={styles.sectionHeader}>Description</h2>
            <div className={styles.descParagraphs}>
              <p>
                Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
              </p>
              <p>
                In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
              </p>
              <p>
                As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
              </p>
            </div>
          </div>

          {/* Sneak Peak Block */}
          <div className={styles.sneakPeakBlock}>
            <h2 className={styles.sectionHeader}>Sneak Peak</h2>
            <div className={styles.sneakImagesRow}>
              {SNEAK_PEEK_IMAGES.map((src, idx) => (
                <div key={idx} className={styles.sneakImageCard}>
                  <Image
                    src={src}
                    alt={`Sneak peek ${idx + 1}`}
                    width={167}
                    height={125}
                    className={styles.sneakThumb}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Key Points Block */}
          <div className={styles.keyPointsBlock}>
            <h2 className={styles.sectionHeader}>Key Points</h2>
            <div className={styles.keyPointsList}>
              {KEY_POINTS.map((point, idx) => (
                <div key={idx} className={styles.keyPointRow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#242528" strokeWidth="2" />
                    <path d="M8.5 12L10.5 14L15.5 9" stroke="#242528" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className={styles.pointText}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer at y: 2192 */}
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
