import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CtaSection.module.css";

const GRID_VERTICALS = [0, 120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, 1320, 1440];
const GRID_HORIZONTALS = [0, 120, 240, 360, 480];

export default function CtaSection() {
  return (
    <section className={styles.ctaSection} aria-label="Become a Creator">
      <div className={styles.ctaStage}>
        {/* Exact Figma Blueprint Grid (Group 4 / 34:1315) */}
        <svg
          className={styles.gridSvg}
          width="1440"
          height="488"
          viewBox="0 0 1440 488"
          fill="none"
          aria-hidden="true"
        >
          <g stroke="#ffffff" strokeWidth="2" opacity="0.12">
            {GRID_VERTICALS.map((x) => (
              <line key={`v-${x}`} x1={x} y1={0} x2={x} y2={488} />
            ))}
            {GRID_HORIZONTALS.map((y) => (
              <line key={`h-${y}`} x1={0} y1={y} x2={1440} y2={y} />
            ))}
          </g>
        </svg>

        {/* 3D Floating Ornaments */}
        {/* 1. Lime Spring Top-Left (385x385 at relX:-118, relY:-162) */}
        <div className={styles.ornamentSpringTopLeft} aria-hidden="true">
          <Image
            src="/assets/images/cta-spring-top-left.png"
            alt=""
            width={385}
            height={385}
            priority
            unoptimized
            className={styles.ornamentImg}
          />
        </div>

        {/* 2. White Spring Top-Center (175x175 at relX:178, relY:5, scaleX:-1) */}
        <div className={styles.ornamentSpringWhite} aria-hidden="true">
          <Image
            src="/assets/images/cta-spring-white.png"
            alt=""
            width={175}
            height={175}
            priority
            unoptimized
            className={styles.ornamentImg}
          />
        </div>

        {/* 3. White Cone Bottom-Left (188x188 at relX:-48, relY:225) */}
        <div className={styles.ornamentConeWhite} aria-hidden="true">
          <Image
            src="/assets/images/cta-cone-white.png"
            alt=""
            width={188}
            height={188}
            priority
            unoptimized
            className={styles.ornamentImg}
          />
        </div>

        {/* 4. Lime Torus Bottom-Left (342x342 at relX:20, relY:299) */}
        <div className={styles.ornamentTorusLime} aria-hidden="true">
          <Image
            src="/assets/images/cta-torus-lime.png"
            alt=""
            width={342}
            height={342}
            priority
            unoptimized
            className={styles.ornamentImg}
          />
        </div>

        {/* 5. Lime Tetrahedron Top-Right (188x188 at relX:1080, relY:0) */}
        <div className={styles.ornamentTetrahedronLime} aria-hidden="true">
          <Image
            src="/assets/images/cta-tetrahedron-lime.png"
            alt=""
            width={188}
            height={188}
            priority
            unoptimized
            className={styles.ornamentImg}
          />
        </div>

        {/* 6. White Cylinder Top-Right (370x370 at relX:1226, relY:6) */}
        <div className={styles.ornamentCylinderWhite} aria-hidden="true">
          <Image
            src="/assets/images/cta-cylinder-white.png"
            alt=""
            width={370}
            height={370}
            priority
            unoptimized
            className={styles.ornamentImg}
          />
        </div>

        {/* 7. Lime Spring Bottom-Right (330x330 at relX:1110, relY:289) */}
        <div className={styles.ornamentSpringBottomRight} aria-hidden="true">
          <Image
            src="/assets/images/cta-spring-bottom-right.png"
            alt=""
            width={330}
            height={330}
            priority
            unoptimized
            className={styles.ornamentImg}
          />
        </div>

        {/* Content Box (964x319 at relX:238, relY:85) */}
        <div className={styles.ctaContent}>
          <h2 className={styles.title}>
            Unlock Your Potential as a<br />Creator with ByteSpace
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
      </div>
    </section>
  );
}

