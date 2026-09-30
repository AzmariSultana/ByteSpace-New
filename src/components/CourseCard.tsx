"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CourseCard.module.css";

export interface CourseCardProps {
  id?: string | number;
  title: string;
  author?: string;
  price?: string;
  priceUnit?: string;
  rating?: string;
  level?: string;
  lessons?: string;
  duration?: string;
  comments?: string;
  imageSrc: string;
  priceColor?: string;
}

export default function CourseCard({
  id = 1,
  title,
  author = "by purepearl studio",
  price = "$25",
  priceUnit = "/lifetime",
  rating = "4.5",
  level = "Beginner",
  lessons = "17 Lessons",
  duration = "2 hours 16 mins",
  comments = "59 Comments",
  imageSrc,
  priceColor = "#003be2",
}: CourseCardProps) {
  return (
    <Link href="/course-details" className={styles.card} aria-label={title}>
      {/* Thumbnail */}
      <div className={styles.imageWrapper}>
        <img
          src={imageSrc}
          alt={title}
          width={341}
          height={195}
          className={styles.thumb}
          loading="eager"
        />
        <div className={styles.badges}>
          <span className={styles.badge}>{lessons}</span>
          <span className={styles.badge}>{duration}</span>
          <span className={styles.badge}>{comments}</span>
        </div>
      </div>

      {/* Info Section */}
      <div className={styles.content}>
        <div className={styles.headerRow}>
          <div className={styles.titleCol}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.author}>{author}</p>
          </div>
          <div className={styles.ratingBadge}>
            <span className={styles.ratingText}>{rating} </span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 1L12.79 6.65L19 7.55L14.5 11.94L15.56 18.13L10 15.21L4.44 18.13L5.5 11.94L1 7.55L7.21 6.65L10 1Z"
                fill="#ced0d3"
              />
            </svg>
          </div>
        </div>

        {/* Level and Avatars */}
        <div className={styles.metaRow}>
          <div className={styles.levelPill}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 14H6V17H4V14ZM9 10H11V17H9V10ZM14 6H16V17H14V6Z" fill="#242528" />
            </svg>
            <span>{level}</span>
          </div>

          <div className={styles.avatarStack}>
            <div className={styles.stackAvatar}>
              <Image src="/assets/images/figma_b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png" alt="" width={32} height={32} unoptimized />
            </div>
            <div className={styles.stackAvatar}>
              <Image src="/assets/images/figma_3fe559181733e0fb69226caee836e40092facb44.png" alt="" width={32} height={32} unoptimized />
            </div>
            <div className={styles.stackAvatar}>
              <Image src="/assets/images/figma_0577f0e9b7fca2f32639871454da0de95f951709.png" alt="" width={32} height={32} unoptimized />
            </div>
            <div className={styles.stackAvatar}>
              <Image src="/assets/images/figma_d0cd3adb501c64c1b4cf766de6abb9fe8925fb5f.png" alt="" width={32} height={32} unoptimized />
            </div>
          </div>
        </div>

        {/* Price */}
        <div className={styles.priceRow}>
          <span className={styles.price} style={{ color: priceColor }}>{price}</span>
          <span className={styles.unit}>{priceUnit}</span>
        </div>
      </div>
    </Link>
  );
}
