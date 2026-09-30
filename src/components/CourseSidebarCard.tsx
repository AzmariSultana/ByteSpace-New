"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CourseSidebarCard.module.css";

const PREVIEW_LESSONS = [
  {
    num: "01",
    title: "Introduction to Digital Assets",
    duration: "12 mins",
  },
  {
    num: "02",
    title: "Design Principles for Impacts",
    duration: "21 mins",
  },
  {
    num: "03",
    title: "Advanced Techniques in Digital Creation",
    duration: "16 mins",
  },
];

interface IncludedItem {
  title: string;
  icon: React.ReactNode;
}

const INCLUDED_ITEMS: IncludedItem[] = [
  {
    title: "Learning Resources",
    icon: (
      <svg width="24" height="24" viewBox="0 -960 960 960" fill="#003be2" aria-hidden="true">
        <path d="M250-340h300v-60H250v60Zm0-160h460v-60H250v60ZM140-160q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h281l60 60h339q23 0 41.5 18.5T880-680v460q0 23-18.5 41.5T820-160H140Zm0-60h680v-460H456l-60-60H140v520Zm0 0v-520 520Z" />
      </svg>
    ),
  },
  {
    title: "Quality Lesson Videos",
    icon: (
      <svg width="24" height="24" viewBox="0 -960 960 960" fill="#003be2" aria-hidden="true">
        <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h520q24 0 42 18t18 42v215l160-160v410L720-435v215q0 24-18 42t-42 18H140Zm0-60h520v-520H140v520Zm0 0v-520 520Z" />
      </svg>
    ),
  },
  {
    title: "Certificate of Completion",
    icon: (
      <svg width="24" height="24" viewBox="0 -960 960 960" fill="#003be2" aria-hidden="true">
        <path d="M140-80q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h250v-140q0-24 18-42t42-18h60q24 0 42 18t18 42v140h250q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680v-480H570v30q0 28-18 44t-42 16h-60q-24 0-42-16t-18-44v-30H140v480Zm92-107h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265-312q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-175.5-65.5Q408-395 408-418t-15.5-38.5Q377-472 354-472t-38.5 15.5Q300-441 300-418t15.5 38.5Q331-364 354-364t38.5-15.5ZM568-427h170v-50H568v50ZM450-590h60v-230h-60v230Zm30 210Z" />
      </svg>
    ),
  },
  {
    title: "Private Consultation",
    icon: (
      <svg width="24" height="24" viewBox="0 -960 960 960" fill="#003be2" aria-hidden="true">
        <path d="M660-80v-86.67Q606-184 568.5-225T523-320h61q10 44 44 72t82 28h120q20.83 0 35.42 14.58Q880-190.83 880-170v90H660Zm109.96-195Q739-275 717-297.04q-22-22.05-22-53Q695-381 717.04-403q22.05-22 53-22Q801-425 823-402.96q22 22.05 22 53Q845-319 822.96-297q-22.05 22-53 22ZM390-420q0-126 87-213t213-87v60q-101 0-170.5 69.5T450-420h-60Zm120 0q0-75 52.65-127.5T690-600v60q-50 0-85 35t-35 85h-60ZM80-535v-90q0-20.83 15-35.42Q110-675 130-675h120q48 0 82-28t44-72h61q-8 54-45.5 95T300-621.67V-535H80Zm109.96-195Q159-730 137-752.04q-22-22.05-22-53Q115-836 137.04-858q22.05-22 53-22Q221-880 243-857.96q22 22.05 22 53Q265-774 242.96-752q-22.05 22-53 22Z" />
      </svg>
    ),
  },
];

export default function CourseSidebarCard() {
  return (
    <aside className={styles.sidebarCard}>
      {/* Lessons count & preview */}
      <div className={styles.sectionTop}>
        <h3 className={styles.lessonCountHeader}>112 Lessons (24 hours)</h3>
        <div className={styles.previewVideoList}>
          {PREVIEW_LESSONS.map((lesson, idx) => (
            <div key={idx} className={styles.videoRow}>
              <div className={styles.videoLeft}>
                <span className={styles.lessonNum}>{lesson.num}</span>
                <span className={styles.videoTitle}>{lesson.title}</span>
              </div>
              <span className={styles.videoDuration}>{lesson.duration}</span>
            </div>
          ))}
          <p className={styles.moreVideosText}>99 more videos</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        <p className={styles.ctaPrompt}>
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <div className={styles.priceRow}>
          <span className={styles.priceAmount}>$25</span>
          <span className={styles.priceLifetime}>/lifetime</span>
        </div>

        <button className={styles.enrollBtn}>Enroll Now</button>
      </div>

      {/* Course Includes */}
      <div className={styles.includesSection}>
        <h4 className={styles.includesTitle}>This course include</h4>
        <div className={styles.includesList}>
          {INCLUDED_ITEMS.map((item, idx) => (
            <div key={idx} className={styles.includeRow}>
              {item.icon}
              <span className={styles.includeText}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.divider}></div>

      {/* Creator Mini Profile */}
      <div className={styles.creatorProfile}>
        <div className={styles.creatorHeader}>
          <Image
            src="/assets/images/figma_bfd09b20f2cf44bfa3af771f6396363d4ae67aab.png"
            alt="PurePearl Studio"
            width={52}
            height={52}
            className={styles.creatorAvatar}
            unoptimized
          />
          <div className={styles.creatorMeta}>
            <span className={styles.creatorName}>PurePearl Studio</span>
            <span className={styles.creatorRole}>Professional Creator</span>
          </div>
        </div>

        <p className={styles.creatorBio}>
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <Link href="/creator-profile" className={styles.profileBtn}>
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}
