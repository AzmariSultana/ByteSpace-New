"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import GridBackground from "@/components/GridBackground";
import Footer from "@/components/Footer";
import styles from "./NotFound.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      {/* 404 Hero Frame (1440 x 957) */}
      <section className={styles.heroSection}>
        <div className={styles.heroStage}>
          {/* Header */}
          <PageHeader activeNav="none" />

          {/* Grid Background */}
          <GridBackground height={957} width={1440} />

          {/* 3D Floating Ornaments */}
          {/* 1. Top Left Large Torus/Ornament */}
          <div className={styles.ornamentTopLeft}>
            <Image
              src="/assets/images/figma_f1057d714a93edf29b02a9dbdb4fc552fd7ab847.png"
              alt=""
              width={332}
              height={331}
              priority
            />
          </div>

          {/* 2. Bottom Left Spring/Cone */}
          <div className={styles.ornamentBottomLeft}>
            <Image
              src="/assets/images/figma_6be36b89bfec399afb445a39d9bf4cb181332d48.png"
              alt=""
              width={188}
              height={188}
              priority
            />
          </div>

          {/* 3. Top Right Sphere */}
          <div className={styles.ornamentTopRight}>
            <Image
              src="/assets/images/figma_d5e9c4dc379dbf3d1f6679a4423483f6766a7931.png"
              alt=""
              width={222}
              height={222}
              priority
            />
          </div>

          {/* 4. Bottom Right Large Cone */}
          <div className={styles.ornamentBottomRight}>
            <Image
              src="/assets/images/figma_24321b8894c48b04befaa9e71f204daacc40bbc4.png"
              alt=""
              width={357}
              height={356}
              priority
            />
          </div>

          {/* Giant 404 Gradient Watermark */}
          <div className={styles.watermark404} aria-hidden="true">
            404
          </div>

          {/* Center Content at (253, 521) */}
          <div className={styles.centerContent}>
            <h1 className={styles.mainTitle}>
              The page you are looking for doesn’t exist
            </h1>
            <p className={styles.subtitle}>
              Try to use a correct url or go back to homepage to start again
            </p>
            <div className={styles.btnRow}>
              <Link href="/" className={styles.homeBtn}>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (1440 x 525) */}
      <Footer />
    </div>
  );
}
