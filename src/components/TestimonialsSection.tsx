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
    <section className={styles.testimonialsSection}>
      <div className="container">
        {/* Header Row */}
        <div className={styles.headerRow}>
          <h2 className={styles.title}>
            Discover What Our Community Is Saying
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
              <div className={styles.authorWrapper}>
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={80}
                  height={80}
                  className={styles.avatar}
                />
                <div className={styles.authorMeta}>
                  <h3 className={styles.authorName}>{t.name}</h3>
                  <span className={styles.authorRole}>{t.role}</span>
                  <div className={styles.starsRow} aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src="/assets/svgs/icon-star.svg"
                        alt="Star"
                        width={16}
                        height={16}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className={styles.quoteText}>{t.quote}</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
