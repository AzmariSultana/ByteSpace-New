import React from "react";
import Image from "next/image";
import styles from "./FeaturesSection.module.css";

const studentAvatars = [
  "/assets/images/avatar-1.png",
  "/assets/images/avatar-2.png",
  "/assets/images/avatar-3.png",
  "/assets/images/avatar-4.png",
  "/assets/images/avatar-5.png",
  "/assets/images/avatar-6.png",
  "/assets/images/avatar-7.png",
];

const courseCardAvatars = [
  "/assets/images/avatar-2.png",
  "/assets/images/avatar-8.png",
  "/assets/images/testimonial-1.png",
  "/assets/images/avatar-9.png",
];

export default function FeaturesSection() {
  return (
    <section className={styles.featuresSection} aria-label="Why Choose ByteSpace">
      <div className={styles.featuresStage}>
        {/* ================= ROW 1 ================= */}
        {/* Left Text Block 1 (relX: 121px, relY: 194px) */}
        <div className={styles.textContent1}>
          <h2 className={styles.heading1}>
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className={styles.description1}>
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you need.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>12K</span>
              <span className={styles.statLabel}>Students</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>70+</span>
              <span className={styles.statLabel}>Courses</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>16</span>
              <span className={styles.statLabel}>Creators</span>
            </div>
          </div>
        </div>

        {/* Right Visual Stage 1 (relX: 758px, relY: 120px) */}
        <div className={styles.visualStage1}>
          {/* 1. Course Card */}
          <div className={styles.courseCard}>
            <div className={styles.cardThumbnailWrapper}>
              <Image
                src="/assets/images/course-1.png"
                alt="Learn Figma from Basic"
                fill
                sizes="341px"
                className={styles.cardThumbnailImg}
                priority
              />
              <div className={styles.cardThumbnailBadges}>
                <span className={styles.thumbnailBadge}>17 Lessons</span>
                <span className={styles.thumbnailBadge}>2 hours 16 mins</span>
                <span className={styles.thumbnailBadge}>59 Comments</span>
              </div>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.cardTitleRow}>
                <h3 className={styles.cardTitle}>Learn Figma from Basic</h3>
                <div className={styles.cardRating}>
                  <span className={styles.cardRatingValue}>4.5</span>
                  <svg
                    className={styles.starIcon}
                    viewBox="0 0 24 24"
                    fill="#d4fb20"
                    width="20"
                    height="20"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>

              <span className={styles.cardAuthor}>
                by <span className={styles.cardAuthorName}>purepearl studio</span>
              </span>

              <div className={styles.cardMetaRow}>
                <div className={styles.levelBadge}>
                  <svg
                    className={styles.levelIcon}
                    viewBox="0 0 20 20"
                    fill="#4b4c53"
                    width="13"
                    height="13"
                  >
                    <path d="M2 13h3v5H2v-5zm6-5h3v10H8V8zm6-6h3v16h-3V2z" />
                  </svg>
                  <span>Beginner</span>
                </div>

                <div className={styles.cardAvatarStack}>
                  {courseCardAvatars.map((av, idx) => (
                    <Image
                      key={idx}
                      src={av}
                      alt="Enrolled student"
                      width={32}
                      height={32}
                      className={styles.cardAvatarItem}
                    />
                  ))}
                  <div className={styles.cardAvatarCount}>26+</div>
                </div>
              </div>

              <div className={styles.cardPriceRow}>
                <span className={styles.cardPrice}>$25</span>
                <span className={styles.cardPriceUnit}>/lifetime</span>
              </div>
            </div>
          </div>

          {/* 2. The Boy with Laptop */}
          <div className={styles.boyImageWrapper}>
            <Image
              src="/assets/images/hero-student.png"
              alt="Student holding laptop"
              width={577}
              height={540}
              className={styles.boyImg}
              priority
            />
          </div>

          {/* 3. Floating Learning Progress Badge */}
          <div className={styles.progressBadge}>
            <span className={styles.progressBadgeTitle}>Learning Progress</span>
            <span className={styles.progressBadgeValue}>55%</span>
            <div className={styles.progressTrack}>
              <div className={styles.progressBar} />
            </div>
          </div>

          {/* 4. Lime Spring Ornament over the Learning Progress card */}
          <div className={styles.springBoyWrapper}>
            <Image
              src="/assets/images/feature-spring-boy.png"
              alt="Decorative spring ornament"
              width={215}
              height={215}
              className={styles.springBoyImg}
              unoptimized
              priority
            />
          </div>
        </div>

        {/* ================= ROW 2 ================= */}
        {/* Left Visual Stage 2 (relX: 121px, relY: 744px) */}
        <div className={styles.visualStage2}>
          {/* 1. Total Revenue Badge (Top Left behind girl) */}
          <div className={styles.revenueBadge1}>
            <div className={styles.revenueBadgeHeader}>
              <span className={styles.revenueBadgeTitle}>Total Revenue</span>
              <span className={styles.revenueBadgeDate}>July 1-28</span>
            </div>
            <div className={styles.revenueBadgeValueRow}>
              <span className={styles.revenueBadgeValue}>$120.29</span>
            </div>
            <div className={styles.revenueProgressTrack}>
              <div className={styles.revenueProgressBar} />
            </div>
          </div>

          {/* 2. Year to Date Badge (Middle Left behind girl) */}
          <div className={styles.revenueBadge2}>
            <div className={styles.revenueBadgeHeader}>
              <span className={styles.revenueBadgeTitle}>Year to Date</span>
              <span className={styles.revenueBadgeDate}>2023</span>
            </div>
            <span className={styles.revenueBadgeValue2}>$1,200.38</span>
            <div className={styles.revenuePillWrapper}>
              <span className={styles.revenueBadgePill}>+12$</span>
            </div>
          </div>

          {/* 3. Lime Spring Ornament behind girl on the right */}
          <div className={styles.springGirlWrapper}>
            <Image
              src="/assets/images/feature-spring-girl.png"
              alt="Decorative spring ornament"
              width={215}
              height={215}
              className={styles.springGirlImg}
              unoptimized
              priority
            />
          </div>

          {/* 4. The Creator Girl */}
          <div className={styles.girlImageWrapper}>
            <Image
              src="/assets/images/feature-girl.png"
              alt="Creator with tablet and headset"
              width={435}
              height={596}
              className={styles.girlImg}
              priority
            />
          </div>

          {/* 5. Happy Students Badge (Bottom Right in front of girl) */}
          <div className={styles.happyStudentsBadge}>
            <span className={styles.studentsBadgeTitle}>Happy Students</span>
            <div className={styles.studentsRatingRow}>
              <span className={styles.studentsRatingText}>
                <strong className={styles.ratingScoreBold}>4.5</strong> (240)
              </span>
              <svg
                className={styles.starIconSmall}
                viewBox="0 0 24 24"
                fill="#d4fb20"
                width="16"
                height="16"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>

            <div className={styles.studentsAvatarStack}>
              {studentAvatars.map((av, idx) => (
                <Image
                  key={idx}
                  src={av}
                  alt="Happy student avatar"
                  width={43}
                  height={43}
                  className={styles.studentsAvatarImg}
                />
              ))}
              <div className={styles.studentsAvatarCount}>2K+</div>
            </div>
          </div>
        </div>

        {/* Right Text Block 2 (relX: 741px, relY: 848px) */}
        <div className={styles.textContent2}>
          <h2 className={styles.heading2}>
            Create &amp; Manage Courses Easily.
          </h2>
          <p className={styles.description2}>
            <strong className={styles.brandBold}>ByteSpace</strong> supports individuals or entities in the creation,
            publication, and administration of educational courses.
          </p>

          <div className={styles.checklist}>
            <div className={styles.checkItem}>
              <svg className={styles.checkIcon} viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" fill="#003be2" />
                <path d="M8.2 12.2L10.7 14.7L16 9.4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className={styles.checkText}>Share Your Expertise</span>
            </div>

            <div className={styles.checkItem}>
              <svg className={styles.checkIcon} viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" fill="#003be2" />
                <path d="M8.2 12.2L10.7 14.7L16 9.4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className={styles.checkText}>Monetize Your Passion</span>
            </div>

            <div className={styles.checkItem}>
              <svg className={styles.checkIcon} viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" fill="#003be2" />
                <path d="M8.2 12.2L10.7 14.7L16 9.4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className={styles.checkText}>Flexibility and Autonomy</span>
            </div>

            <div className={styles.checkItem}>
              <svg className={styles.checkIcon} viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" fill="#003be2" />
                <path d="M8.2 12.2L10.7 14.7L16 9.4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className={styles.checkText}>Build a Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
