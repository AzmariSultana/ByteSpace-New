"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GridBackground from "@/components/GridBackground";
import styles from "./Register.module.css";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register submitted", { fullName, email, password });
  };

  return (
    <div className={styles.page}>
      <div className={styles.stage}>
        {/* Blue Grid Background */}
        <GridBackground height={1024} width={1440} />

        {/* Header Logo */}
        <header className={styles.header}>
          <Link href="/" className={styles.logo} aria-label="ByteSpace Home">
            <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5479 10.5479C10.5479 4.72245 5.82544 0 0 0V21.0958C0 26.9212 4.72245 31.6437 10.5479 31.6437V10.5479Z" fill="#D4FB20"/>
              <path d="M18.4588 10.5479C24.2842 10.5479 29.0067 15.2703 29.0067 21.0958H21.0958C15.2703 21.0958 10.5479 16.3733 10.5479 10.5479L18.4588 10.5479Z" fill="#D4FB20"/>
              <path d="M18.4588 31.6437C24.2842 31.6437 29.0067 26.9212 29.0067 21.0958H21.0958C15.2703 21.0958 10.5479 25.8182 10.5479 31.6437L18.4588 31.6437Z" fill="#D4FB20"/>
            </svg>
          </Link>
        </header>

        {/* Left Side Content */}
        <div className={styles.leftText}>
          <h2 className={styles.leftSubtitle}>Sign up and come in</h2>
          <p className={styles.leftDescription}>
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
          </p>
        </div>

        {/* 3D Ornaments */}
        {/* Lime Torus (49:185) */}
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

        {/* Lime Tetrahedron (49:190) */}
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

        {/* White 3D Spring (49:180) */}
        <div className={styles.sphereOrnament}>
          <Image
            src="/assets/images/login-spring-white.png"
            alt=""
            width={182}
            height={182}
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
                <p className={styles.cardAuthor}>by <span className={styles.studioText}>purepearl studio</span></p>
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
                <div className={styles.avatarMore}>
                  <span>26+</span>
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
                <p className={styles.cardAuthor}>by <span className={styles.studioText}>purepearl studio</span></p>
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
                <div className={styles.avatarMore}>
                  <span>26+</span>
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
              <span className={styles.happyRatingText}>
                <span className={styles.happyRatingScore}>4.5</span> (240)
              </span>
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

        {/* Right Register Card (at x: 741, y: 120, size 579x784) */}
        <div className={styles.registerCard}>
          <div className={styles.formContent}>
            <div className={styles.formHeader}>
              <span className={styles.formSubtitle}>Create an Account</span>
              <h1 className={styles.formTitle}>Welcome to ByteSpace</h1>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel} htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  className={styles.inputField}
                  placeholder="Jamie Davis"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

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
                  Continue
                </button>
              </div>
            </form>

            <div className={styles.switchRow}>
              <span className={styles.switchText}>Already have an account?</span>
              <Link href="/login" className={styles.switchLink}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
