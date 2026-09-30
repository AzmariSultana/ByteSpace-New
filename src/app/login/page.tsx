"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GridBackground from "@/components/GridBackground";
import styles from "./Login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted", { email, password });
  };

  return (
    <div className={styles.page}>
      <div className={styles.stage}>
        {/* Blue Grid Background */}
        <GridBackground height={1024} width={1440} />

        {/* Header Logo */}
        <header className={styles.header}>
          <Link href="/" className={styles.logo} aria-label="ByteSpace Home">
            <Image
              src="/assets/svgs/logo.svg"
              alt="ByteSpace"
              width={171}
              height={37}
              priority
            />
          </Link>
        </header>

        {/* Left Side Content */}
        <div className={styles.leftText}>
          <h2 className={styles.leftSubtitle}>Sign in with ease</h2>
          <p className={styles.leftDescription}>
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>
        </div>

        {/* 3D Ornaments */}
        {/* Lime Torus (49:335) */}
        <div className={styles.coneTop}>
          <Image
            src="/assets/images/cta-torus-lime.png"
            alt=""
            width={146}
            height={146}
            priority
            unoptimized
          />
        </div>

        {/* Lime Tetrahedron (49:340) */}
        <div className={styles.coneBottom}>
          <Image
            src="/assets/images/cta-tetrahedron-lime.png"
            alt=""
            width={188}
            height={188}
            priority
            unoptimized
          />
        </div>

        {/* White 3D Spring (49:330) */}
        <div className={styles.sphereOrnament}>
          <Image
            src="/assets/images/figma_e3b55902d605bfc37a0809e6dc6dfe61b6701897.png"
            alt=""
            width={175}
            height={175}
            priority
            unoptimized
          />
        </div>

        {/* Course Card 1 (Bottom Card at x: 122, y: 394) */}
        <div className={styles.courseCard1}>
          <div className={styles.cardImageWrapper}>
            <Image
              src="/assets/images/figma_c88264191d691ba3300ad4f82a942429bb912fa5.png"
              alt="Build Digital Asset"
              width={341}
              height={195}
              className={styles.cardThumb}
            />
            <div className={styles.cardBadges}>
              <span className={styles.badge}>17 Lessons</span>
              <span className={styles.badge}>2 hours 16 mins</span>
              <span className={styles.badge}>59 Comments</span>
            </div>
          </div>

          <div className={styles.cardContent}>
            <div className={styles.cardHeaderRow}>
              <div>
                <h3 className={styles.cardTitle}>Build Digital Asset</h3>
                <p className={styles.cardAuthor}>by purepearl studio</p>
              </div>
              <div className={styles.ratingBadge}>
                <span className={styles.ratingText}>4.5 </span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 1L12.79 6.65L19 7.55L14.5 11.94L15.56 18.13L10 15.21L4.44 18.13L5.5 11.94L1 7.55L7.21 6.65L10 1Z"
                    fill="#d4fb20"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.cardMetaRow}>
              <div className={styles.levelPill}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 14H6V17H4V14ZM9 10H11V17H9V10ZM14 6H16V17H14V6Z" fill="#242528" />
                </svg>
                <span>Beginner</span>
              </div>

              <div className={styles.avatarStack}>
                <div className={styles.stackAvatar}>
                  <Image src="/assets/images/figma_b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png" alt="" width={32} height={32} />
                </div>
                <div className={styles.stackAvatar}>
                  <Image src="/assets/images/figma_3fe559181733e0fb69226caee836e40092facb44.png" alt="" width={32} height={32} />
                </div>
                <div className={styles.stackAvatar}>
                  <Image src="/assets/images/figma_0577f0e9b7fca2f32639871454da0de95f951709.png" alt="" width={32} height={32} />
                </div>
                <div className={styles.stackAvatar}>
                  <Image src="/assets/images/figma_d0cd3adb501c64c1b4cf766de6abb9fe8925fb5f.png" alt="" width={32} height={32} />
                </div>
              </div>
            </div>

            <div className={styles.cardPriceRow}>
              <span className={styles.priceAmount}>$25</span>
              <span className={styles.priceUnit}>/lifetime</span>
            </div>
          </div>
        </div>

        {/* Course Card 2 (Top Card at x: 233, y: 305) */}
        <div className={styles.courseCard2}>
          <div className={styles.cardImageWrapper}>
            <Image
              src="/assets/images/figma_4f3bdea5688b1a654db7a29b0bc5dd3563059d11.png"
              alt="the Power of Big Data"
              width={341}
              height={195}
              className={styles.cardThumb}
            />
            <div className={styles.cardBadges}>
              <span className={styles.badge}>17 Lessons</span>
              <span className={styles.badge}>2 hours 16 mins</span>
              <span className={styles.badge}>59 Comments</span>
            </div>
          </div>

          <div className={styles.cardContent}>
            <div className={styles.cardHeaderRow}>
              <div>
                <h3 className={styles.cardTitle}>the Power of Big Data</h3>
                <p className={styles.cardAuthor}>by purepearl studio</p>
              </div>
              <div className={styles.ratingBadge}>
                <span className={styles.ratingText}>4.5 </span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 1L12.79 6.65L19 7.55L14.5 11.94L15.56 18.13L10 15.21L4.44 18.13L5.5 11.94L1 7.55L7.21 6.65L10 1Z"
                    fill="#d4fb20"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.cardMetaRow}>
              <div className={styles.levelPill}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 14H6V17H4V14ZM9 10H11V17H9V10ZM14 6H16V17H14V6Z" fill="#242528" />
                </svg>
                <span>Beginner</span>
              </div>

              <div className={styles.avatarStack}>
                <div className={styles.stackAvatar}>
                  <Image src="/assets/images/figma_b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png" alt="" width={32} height={32} />
                </div>
                <div className={styles.stackAvatar}>
                  <Image src="/assets/images/figma_3fe559181733e0fb69226caee836e40092facb44.png" alt="" width={32} height={32} />
                </div>
                <div className={styles.stackAvatar}>
                  <Image src="/assets/images/figma_0577f0e9b7fca2f32639871454da0de95f951709.png" alt="" width={32} height={32} />
                </div>
                <div className={styles.stackAvatar}>
                  <Image src="/assets/images/figma_d0cd3adb501c64c1b4cf766de6abb9fe8925fb5f.png" alt="" width={32} height={32} />
                </div>
              </div>
            </div>

            <div className={styles.cardPriceRow}>
              <span className={styles.priceAmount}>$25</span>
              <span className={styles.priceUnit}>/lifetime</span>
            </div>
          </div>
        </div>

        {/* Happy Students Card (at x: 348, y: 740) */}
        <div className={styles.happyCard}>
          <div className={styles.happyCardTop}>
            <span className={styles.happyTitle}>Happy Students</span>
            <div className={styles.happyRatingRow}>
              <span className={styles.happyRatingText}>4.5 (240)</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1L10.23 5.52L15.22 6.24L11.61 9.75L12.46 14.72L8 12.38L3.54 14.72L4.39 9.75L0.78 6.24L5.77 5.52L8 1Z"
                  fill="#003be2"
                />
              </svg>
            </div>
          </div>

          <div className={styles.happyAvatarStack}>
            <Image className={styles.happyAvatar} src="/assets/images/figma_9ef8cb329b949267cc8214b6727067c4a13af4b4.png" alt="" width={43} height={43} />
            <Image className={styles.happyAvatar} src="/assets/images/figma_b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png" alt="" width={43} height={43} />
            <Image className={styles.happyAvatar} src="/assets/images/figma_83fb3e04056cc892636460bee5791aa3f243854c.png" alt="" width={43} height={43} />
            <Image className={styles.happyAvatar} src="/assets/images/figma_f3cf29a8fed39589ceb38423e65b26b8d6c93123.png" alt="" width={43} height={43} />
            <Image className={styles.happyAvatar} src="/assets/images/figma_5824acacb3b76175bc84084ec18597109498f96d.png" alt="" width={43} height={43} />
            <Image className={styles.happyAvatar} src="/assets/images/figma_7fdccc783264eedc4fb989984eecbc4058a219f2.png" alt="" width={43} height={43} />
            <Image className={styles.happyAvatar} src="/assets/images/figma_1e078348a54489bfd231d82fe1944770883c8d80.png" alt="" width={43} height={43} />
            <div className={styles.happyCountBadge}>
              <span>2K+</span>
            </div>
          </div>
        </div>

        {/* Right Login Card (at x: 741, y: 120, size 579x784) */}
        <div className={styles.loginCard}>
          <div className={styles.formContent}>
            <div>
              <div className={styles.formHeader}>
                <span className={styles.formSubtitle}>Sign In</span>
                <h1 className={styles.formTitle}>Welcome Back</h1>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className={styles.inputField}
                    placeholder="designer@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    className={styles.inputField}
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.btnRow}>
                  <button type="submit" className={styles.submitBtn}>
                    Sign In
                  </button>
                </div>
              </form>
            </div>

            <div className={styles.socialSection}>
              <div className={styles.orDivider}>
                <div className={styles.dividerLine}></div>
                <span className={styles.orText}>or</span>
                <div className={styles.dividerLine}></div>
              </div>

              <div className={styles.socialButtonsRow}>
                {/* Google Icon */}
                <button type="button" className={styles.socialBtn} aria-label="Sign in with Google">
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path
                      d="M32.8 16.85C32.8 15.68 32.7 14.54 32.51 13.45H16.73V19.86H25.75C25.35 21.95 24.14 23.73 22.33 24.94V29.17H27.84C31.06 26.2 32.8 21.84 32.8 16.85Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M16.73 33.25C21.24 33.25 25.03 31.76 27.84 29.17L22.33 24.94C20.8 25.96 18.86 26.58 16.73 26.58C12.38 26.58 8.69 23.64 7.37 19.68H1.67V24.09C4.54 29.79 10.23 33.25 16.73 33.25Z"
                      fill="#34A853"
                    />
                    <path
                      d="M7.37 19.68C7.03 18.68 6.84 17.61 6.84 16.5C6.84 15.39 7.03 14.32 7.37 13.32V8.91H1.67C0.61 11.02 0 13.69 0 16.5C0 19.31 0.61 21.98 1.67 24.09L7.37 19.68Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M16.73 6.42C19.19 6.42 21.39 7.26 23.12 8.92L28 4.04C25.02 1.26 21.23 0 16.73 0C10.23 0 4.54 3.46 1.67 9.16L7.37 13.57C8.69 9.61 12.38 6.42 16.73 6.42Z"
                      fill="#EA4335"
                    />
                  </svg>
                </button>

                {/* Apple Icon */}
                <button type="button" className={styles.socialBtn} aria-label="Sign in with Apple">
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none">
                    <path
                      d="M26.4 17.5C26.37 13.88 29.32 12.12 29.45 12.04C27.76 9.58 25.13 9.24 24.21 9.2C21.97 8.98 19.82 10.51 18.68 10.51C17.54 10.51 15.77 9.23 13.9 9.26C11.47 9.3 9.22 10.68 7.97 12.85C5.45 17.22 7.33 23.69 9.77 27.21C10.96 28.93 12.38 30.86 14.25 30.79C16.05 30.72 16.73 29.63 18.91 29.63C21.08 29.63 21.7 30.79 23.59 30.75C25.51 30.72 26.73 28.99 27.91 27.27C29.28 25.27 29.84 23.32 29.88 23.21C29.84 23.19 26.43 21.89 26.4 17.5ZM21.94 6.77C22.92 5.58 23.58 3.93 23.4 2.27C21.98 2.33 20.26 3.22 19.24 4.41C18.33 5.46 17.53 7.15 17.74 8.77C19.32 8.89 20.96 7.96 21.94 6.77Z"
                      fill="#000000"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className={styles.switchRow}>
              <span className={styles.switchText}>New user?</span>
              <Link href="/register" className={styles.switchLink}>
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
