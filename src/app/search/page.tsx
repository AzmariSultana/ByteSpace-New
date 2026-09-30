"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import GridBackground from "@/components/GridBackground";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import styles from "./SearchPage.module.css";

const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const COURSES = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-1.png",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-2.png",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-3.png",
  },
  {
    id: 4,
    title: "Balancing Productivity and Self-Care",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-4.png",
  },
  {
    id: 5,
    title: "Mastering Money Management",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-5.png",
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-6.png",
  },
  {
    id: 7,
    title: "Learn Figma from Basic",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-1.png",
  },
  {
    id: 8,
    title: "Build Digital Asset",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-2.png",
  },
  {
    id: 9,
    title: "the Power of Big Data",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-3.png",
  },
  {
    id: 10,
    title: "Balancing Productivity and Self-Care",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-4.png",
  },
  {
    id: 11,
    title: "Mastering Money Management",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-5.png",
  },
  {
    id: 12,
    title: "From Idea to Startup Success",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-6.png",
  },
  {
    id: 13,
    title: "Learn Figma from Basic",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-1.png",
  },
  {
    id: 14,
    title: "Build Digital Asset",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-2.png",
  },
  {
    id: 15,
    title: "the Power of Big Data",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-3.png",
  },
  {
    id: 16,
    title: "Balancing Productivity and Self-Care",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-4.png",
  },
  {
    id: 17,
    title: "Mastering Money Management",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-5.png",
  },
  {
    id: 18,
    title: "From Idea to Startup Success",
    author: "by purepearl studio",
    price: "$25",
    rating: "4.5",
    imageSrc: "/assets/images/course-6.png",
  },
];

export default function SearchPage() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [searchVal, setSearchVal] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className={styles.wrapper}>
      {/* Search Page Hero (1440 x 360) */}
      <section className={styles.heroSection}>
        <div className={styles.heroStage}>
          {/* Header */}
          <PageHeader activeNav="courses" />

          {/* Grid Background */}
          <GridBackground height={360} width={1440} />

          {/* 3D Floating Ornaments */}
          <div className={styles.ornamentLeftTorus}>
            <Image
              src="/assets/images/figma_f1057d714a93edf29b02a9dbdb4fc552fd7ab847.png"
              alt=""
              width={332}
              height={331}
              priority
              unoptimized
            />
          </div>
          <div className={styles.ornamentLeftSpring}>
            <Image
              src="/assets/images/figma_6be36b89bfec399afb445a39d9bf4cb181332d48.png"
              alt=""
              width={188}
              height={188}
              priority
              unoptimized
            />
          </div>
          <div className={styles.ornamentRightSphere}>
            <Image
              src="/assets/images/figma_d5e9c4dc379dbf3d1f6679a4423483f6766a7931.png"
              alt=""
              width={222}
              height={222}
              priority
              unoptimized
            />
          </div>
          <div className={styles.ornamentRightCone}>
            <Image
              src="/assets/images/figma_24321b8894c48b04befaa9e71f204daacc40bbc4.png"
              alt=""
              width={357}
              height={356}
              priority
              unoptimized
            />
          </div>

          {/* Search Content at (408, 164) */}
          <div className={styles.searchHeroContent}>
            <h1 className={styles.heroTitle}>Find Your Next Course</h1>
            <div className={styles.searchBarRow}>
              <div className={styles.searchInputBox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="#82868E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="#82868E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className={styles.searchInput}
                />
              </div>

              <button className={styles.filterBtn}>
                <span>Courses</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#242528"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Stage (Filter Bar, Category Tabs, Course Grid, Pagination) */}
      <section className={styles.bodySection}>
        <div className={styles.bodyStage}>
          {/* Filter Bar at (119, 432) -> relative y in bodyStage: 72px */}
          <div className={styles.filterBar}>
            <div className={styles.filterLeft}>
              <button className={styles.filterPill}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6H20M7 12H17M10 18H14" stroke="#242528" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Filter</span>
              </button>

              <button className={styles.filterPill}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 14H6V17H4V14ZM9 10H11V17H9V10ZM14 6H16V17H14V6Z" fill="#242528" />
                </svg>
                <span>Level</span>
              </button>

              <button className={styles.filterPill}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H10V10H4V4ZM14 4H20V10H14V4ZM4 14H10V20H4V14ZM14 14H20V20H14V14Z" stroke="#242528" strokeWidth="2" />
                </svg>
                <span>Category</span>
              </button>
            </div>

            <div className={styles.filterRight}>
              <button className={styles.relevantPill}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6H21M6 12H18M9 18H15" stroke="#242528" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>Most relevant</span>
              </button>
            </div>
          </div>

          {/* Category Tabs at (120, 512) -> relative y in bodyStage: 152px */}
          <div className={styles.categoryTabs}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`${styles.catTab} ${
                  activeCategory === cat ? styles.catTabActive : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 18 Course Cards Grid at (121, 632) -> relative y in bodyStage: 272px */}
          <div className={styles.courseGrid}>
            {COURSES.map((course, idx) => (
              <CourseCard
                key={`${course.title}-${idx}`}
                id={course.id}
                title={course.title}
                author={course.author}
                price={course.price}
                rating={course.rating}
                imageSrc={course.imageSrc}
                priceColor="#003be2"
              />
            ))}
          </div>

          {/* Pagination at (588, 3208) -> relative y in bodyStage: 2848px */}
          <div className={styles.pagination}>
            <button
              className={styles.pageArrow}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              aria-label="Previous page"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="#4B4C53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`${styles.pageNum} ${
                  currentPage === num ? styles.pageNumActive : ""
                }`}
              >
                {num}
              </button>
            ))}

            <button
              className={styles.pageArrow}
              onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
              aria-label="Next page"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="#242528" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer (1440 x 525) */}
      <Footer />
    </div>
  );
}
