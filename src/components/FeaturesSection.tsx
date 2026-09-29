import React from "react";
import Image from "next/image";
import styles from "./FeaturesSection.module.css";

export default function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.glowBg} />

      <div className="container">
        {/* Row 1: Professional Growth */}
        <div className={styles.featureRow}>
          {/* Left Text */}
          <div className={styles.textContent}>
            <h2 className={styles.heading}>
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className={styles.description}>
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you need.
            </p>

            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>12K</span>
                <span className={styles.statLabel}>Students</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>70+</span>
                <span className={styles.statLabel}>Courses</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>16</span>
                <span className={styles.statLabel}>Creators</span>
              </div>
            </div>
          </div>

          {/* Right Visual (Course Preview Card + Floating Progress Badge) */}
          <div className={styles.visualWrapper1}>
            <div className={styles.previewCard}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "195px",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/assets/images/course-1.png"
                  alt="Learn Figma from Basic"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "12px",
                    display: "flex",
                    gap: "8px",
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      background: "rgba(246, 246, 246, 0.65)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "24px",
                      padding: "5px 10px",
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "#4f4f4f",
                    }}
                  >
                    17 Lessons
                  </span>
                  <span
                    style={{
                      background: "rgba(246, 246, 246, 0.65)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "24px",
                      padding: "5px 10px",
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "#4f4f4f",
                    }}
                  >
                    2 hours 16 mins
                  </span>
                  <span
                    style={{
                      background: "rgba(246, 246, 246, 0.65)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "24px",
                      padding: "5px 10px",
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "#4f4f4f",
                    }}
                  >
                    59 Comments
                  </span>
                </div>
              </div>

              <div style={{ padding: "16px 8px 8px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "12px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "18px",
                      fontWeight: 600,
                      lineHeight: "24px",
                      color: "#000000",
                    }}
                  >
                    Learn Figma from Basic
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      flexShrink: 0,
                      paddingTop: "2px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-satoshi)",
                        fontSize: "15px",
                        color: "#797979",
                      }}
                    >
                      4.5
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="#ced0d3"
                      width="14"
                      height="14"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-satoshi)",
                    fontSize: "12px",
                    color: "#797979",
                    display: "block",
                    marginTop: "4px",
                  }}
                >
                  by purepearl studio
                </span>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "16px",
                  }}
                >
                  <span
                    style={{
                      background: "#f5f5f6",
                      padding: "6px 12px",
                      borderRadius: "24px",
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#4b4c53",
                    }}
                  >
                    Beginner
                  </span>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src="/assets/images/avatar-2.png"
                      alt="Student"
                      width={30}
                      height={30}
                      style={{ borderRadius: "50%", border: "2px solid #fff" }}
                    />
                    <Image
                      src="/assets/images/avatar-8.png"
                      alt="Student"
                      width={30}
                      height={30}
                      style={{
                        borderRadius: "50%",
                        border: "2px solid #fff",
                        marginLeft: "-8px",
                      }}
                    />
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: "var(--accent-lime)",
                        border: "2px solid #fff",
                        marginLeft: "-8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        fontWeight: 700,
                      }}
                    >
                      26+
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "4px",
                    marginTop: "12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontWeight: 600,
                      fontSize: "20px",
                      color: "var(--primary-blue)",
                    }}
                  >
                    $25
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-satoshi)",
                      fontSize: "12px",
                      color: "#797979",
                    }}
                  >
                    /lifetime
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Learning Progress Card */}
            <div className={styles.floatingProgressBadge}>
              <div className={styles.badgeProgressLabel}>Learning Progress</div>
              <div className={styles.badgeProgressValue}>55%</div>
              <div className={styles.progressTrack}>
                <div className={styles.progressBar} />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Create & Manage Courses Easily */}
        <div className={styles.featureRow}>
          {/* Left Visual (Girl Creator + Revenue & Student Badges) */}
          <div className={styles.visualWrapper2}>
            <div className={styles.creatorImgContainer}>
              <Image
                src="/assets/images/feature-girl.png"
                alt="Creator with laptop"
                fill
                className={styles.creatorImg}
              />
            </div>

            {/* Total Revenue Badge */}
            <div className={styles.revenueBadge1}>
              <div className={styles.badgeHeader}>
                <span className={styles.badgeTitle}>Total Revenue</span>
                <span className={styles.badgeDate}>July 1-28</span>
              </div>
              <div className={styles.badgeValueRow}>
                <span className={styles.badgeValue}>$120.29</span>
                <span className={styles.badgeGrowth}>+12$</span>
              </div>
            </div>

            {/* Year to Date Badge */}
            <div className={styles.revenueBadge2}>
              <div className={styles.badgeHeader}>
                <span className={styles.badgeTitle}>Year to Date</span>
                <span className={styles.badgeDate}>2023</span>
              </div>
              <div className={styles.badgeValueRow}>
                <span className={styles.badgeValue}>$1,200.38</span>
                <span className={styles.badgeGrowth}>+12$</span>
              </div>
            </div>

            {/* Happy Students Badge */}
            <div className={styles.studentsBadgeSmall}>
              <div
                style={{
                  fontFamily: "var(--font-satoshi)",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: "#242528",
                }}
              >
                Happy Students
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  marginTop: "2px",
                  fontSize: "11px",
                  color: "#82868e",
                }}
              >
                <span>4.5 (240)</span>
                <span>⭐</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <Image
                  src="/assets/images/avatar-1.png"
                  alt="Student"
                  width={28}
                  height={28}
                  style={{ borderRadius: "50%", border: "2px solid #fff" }}
                />
                <Image
                  src="/assets/images/avatar-2.png"
                  alt="Student"
                  width={28}
                  height={28}
                  style={{
                    borderRadius: "50%",
                    border: "2px solid #fff",
                    marginLeft: "-6px",
                  }}
                />
                <Image
                  src="/assets/images/avatar-3.png"
                  alt="Student"
                  width={28}
                  height={28}
                  style={{
                    borderRadius: "50%",
                    border: "2px solid #fff",
                    marginLeft: "-6px",
                  }}
                />
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "var(--accent-lime)",
                    border: "2px solid #fff",
                    marginLeft: "-6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 700,
                  }}
                >
                  2K+
                </div>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className={styles.textContent}>
            <h2 className={styles.heading}>
              Create &amp; Manage Courses Easily.
            </h2>
            <p className={styles.description}>
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            <div className={styles.checkpointsList}>
              <div className={styles.checkpointItem}>
                <Image
                  src="/assets/svgs/check-circle.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className={styles.checkIcon}
                />
                <span className={styles.checkpointText}>
                  Share Your Expertise
                </span>
              </div>

              <div className={styles.checkpointItem}>
                <Image
                  src="/assets/svgs/check-circle.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className={styles.checkIcon}
                />
                <span className={styles.checkpointText}>
                  Monetize Your Passion
                </span>
              </div>

              <div className={styles.checkpointItem}>
                <Image
                  src="/assets/svgs/check-circle.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className={styles.checkIcon}
                />
                <span className={styles.checkpointText}>
                  Flexibility and Autonomy
                </span>
              </div>

              <div className={styles.checkpointItem}>
                <Image
                  src="/assets/svgs/check-circle.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className={styles.checkIcon}
                />
                <span className={styles.checkpointText}>Build a Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
