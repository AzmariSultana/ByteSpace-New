"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerNav}>
          {/* Left Column: Logo & Newsletter */}
          <div className={styles.newsletterCol}>
            <div className={styles.logoRow}>
              <Link href="/" className={styles.logo} aria-label="ByteSpace Home">
                <Image
                  src="/assets/svgs/logo-footer.svg"
                  alt="ByteSpace"
                  width={171}
                  height={35}
                />
              </Link>
              <p className={styles.newsletterText}>
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
              <div className={styles.emailInputWrapper}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.emailInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className={styles.subscribeBtn}>
                Search 
              </button>
            </form>

            <p className={styles.privacyDisclaimer}>
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Links */}
          <div className={styles.linksWrapper}>
            {/* Column 1: Browse */}
            <div className={styles.linkCol}>
              <h4 className={styles.colHeading}>Browse</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="#featured-courses" className={styles.footerLink}>
                    Featured Courses
                  </Link>
                </li>
                <li>
                  <Link href="#categories" className={styles.footerLink}>
                    Featured Categories
                  </Link>
                </li>
                <li>
                  <Link href="#business" className={styles.footerLink}>
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="#it" className={styles.footerLink}>
                    IT
                  </Link>
                </li>
                <li>
                  <Link href="#design" className={styles.footerLink}>
                    Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Continuation */}
            <div className={styles.linkCol}>
              <div className={styles.colHeadingPlaceholder} />
              <ul className={styles.linkList}>
                <li>
                  <Link href="#development" className={styles.footerLink}>
                    Development
                  </Link>
                </li>
                <li>
                  <Link href="#marketing" className={styles.footerLink}>
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#photography" className={styles.footerLink}>
                    Photography
                  </Link>
                </li>
                <li>
                  <Link href="#finance" className={styles.footerLink}>
                    Finance
                  </Link>
                </li>
                <li>
                  <Link href="#sport" className={styles.footerLink}>
                    Sport
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Platform */}
            <div className={styles.linkCol}>
              <h4 className={styles.colHeading}>Platform</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="#become-creator" className={styles.footerLink}>
                    Become a Creator
                  </Link>
                </li>
                <li>
                  <Link href="#affiliate" className={styles.footerLink}>
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className={styles.footerLink}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#help" className={styles.footerLink}>
                    Help
                  </Link>
                </li>
                <li>
                  <Link href="#about" className={styles.footerLink}>
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className={styles.copyrightRow}>
          <p className={styles.copyrightText}>
            @ 2023 ByteSpace. All rights reserved.
          </p>

          <div className={styles.legalLinks}>
            <Link href="#privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="#terms" className={styles.legalLink}>
              Terms of Service
            </Link>
            <Link href="#cookies" className={styles.legalLink}>
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
