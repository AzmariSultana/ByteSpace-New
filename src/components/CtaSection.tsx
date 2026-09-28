import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section className={styles.ctaSection} aria-label="Become a Creator">
      {/* Blueprint grid background */}
      <div className={styles.gridBackground} />

      {/* Floating 3D Geometric Shapes on Left & Right */}
      <div className={styles.coneLeft}>
        <Image
          src="/assets/images/ornament-cone-cta.png"
          alt=""
          width={240}
          height={240}
        />
      </div>
      <div className={styles.coneRight}>
        <Image
          src="/assets/images/ornament-cone-white-1.png"
          alt=""
          width={260}
          height={260}
        />
      </div>

      <div className={`container ${styles.ctaContent}`}>
        <h2 className={styles.title}>
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className={styles.description}>
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Link href="#join-creator" className={styles.joinBtn}>
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
