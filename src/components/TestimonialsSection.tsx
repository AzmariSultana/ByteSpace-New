import React from "react";
import Image from "next/image";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/assets/images/testimonial-1.png",
    quote:
      "\"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\"",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/assets/images/testimonial-2.png",
    quote:
      "\"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\"",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/assets/images/testimonial-3.png",
    quote:
      "\"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.\"",
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection} aria-label="Community Testimonials">
      <div className={styles.testimonialsStage}>
        {/* Background Ambient Radial Glows (Figma Ellipse 11, 12, 8) */}
        <div className={styles.bgGlows} aria-hidden="true">
          <div className={styles.glowTopRight} />
          <div className={styles.glowTopCenter} />
          <div className={styles.glowBottomLeft} />
        </div>

        {/* Content Container (1204x653 at relX:118, relY:74) */}
        <div className={styles.content}>
          {/* Header Row */}
          <div className={styles.headerRow}>
            <h2 className={styles.title}>
              Discover What Our<br />Community Is Saying
            </h2>
            <p className={styles.description}>
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>

          {/* 3 Testimonial Cards */}
          <div className={styles.cardsContainer}>
            {testimonials.map((t, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.avatarWrapper}>
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={80}
                    height={80}
                    priority
                    unoptimized
                    className={styles.avatar}
                  />
                </div>

                <div className={styles.authorMeta}>
                  <h3 className={styles.authorName}>{t.name}</h3>
                  <span className={styles.authorRole}>{t.role}</span>
                </div>

                <p className={styles.quoteText}>{t.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

