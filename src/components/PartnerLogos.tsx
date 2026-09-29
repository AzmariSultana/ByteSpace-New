import React from "react";
import Image from "next/image";
import styles from "./PartnerLogos.module.css";

const partners = [
  { name: "Partner 1", src: "/assets/svgs/partner-logo-1.svg", width: 167, height: 41 },
  { name: "Partner 2", src: "/assets/svgs/partner-logo-2.svg", width: 168, height: 41 },
  { name: "Partner 3", src: "/assets/svgs/partner-logo-3.svg", width: 170, height: 41 },
  { name: "Partner 4", src: "/assets/svgs/partner-logo-4.svg", width: 170, height: 41 },
  { name: "Partner 5", src: "/assets/svgs/partner-logo-5.svg", width: 169, height: 42 },
];

export default function PartnerLogos() {
  return (
    <section className={styles.partnerSection} aria-label="Partner Brands">
      <div className={styles.partnerStage}>
        <div className={styles.partnerContainer}>
          {partners.map((p, idx) => (
            <div key={idx} className={styles.partnerLogoItem}>
              <Image
                src={p.src}
                alt={p.name}
                width={p.width}
                height={p.height}
                priority
                unoptimized
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
