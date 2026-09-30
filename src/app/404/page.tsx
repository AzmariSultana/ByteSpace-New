"use client";

import React from "react";
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
