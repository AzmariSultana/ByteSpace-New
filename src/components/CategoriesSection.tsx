import React from "react";
import Image from "next/image";
import styles from "./CategoriesSection.module.css";

const categories = [
  { name: "Design", icon: "/assets/svgs/cat-design.svg" },
  { name: "Development", icon: "/assets/svgs/cat-development.svg" },
  { name: "IT & Software", icon: "/assets/svgs/cat-it-software.svg" },
  { name: "Business", icon: "/assets/svgs/cat-business.svg" },
  { name: "Marketing", icon: "/assets/svgs/cat-marketing.svg" },
  { name: "Photography", icon: "/assets/svgs/cat-photography.svg" },
];

export default function CategoriesSection() {
  return (
    <section className={styles.categoriesSection} aria-label="Explore Diverse Learning Paths">
      <div className={styles.categoriesStage}>
        {/* Intro (Frame 9 / 34:684: 917x117 at relX:261.5, relY:72) */}
        <div className={styles.intro}>
          <h2 className={styles.title}>
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className={styles.description}>
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various fields, ensuring
            there&apos;s something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards (Frame 10 / 34:725: 1202x167 at relX:119, relY:257) */}
        <div className={styles.categoriesGrid}>
          {categories.map((cat, idx) => (
            <div key={idx} className={styles.categoryCard}>
              <div className={styles.iconCircle}>
                <Image
                  src={cat.icon}
                  alt={cat.name}
                  width={36}
                  height={36}
                  priority
                  unoptimized
                  className={styles.iconImg}
                />
              </div>
              <span className={styles.categoryName}>{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

