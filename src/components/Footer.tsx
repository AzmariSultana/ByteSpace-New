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
      <div className={styles.footerContainer}>
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
                  priority
                />
              </Link>
              <p className={styles.newsletterText}>
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>

            <div className={styles.formBlock}>
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
          </div>

          {/* Right Columns: Links (No invisible/phantom headings) */}
          <div className={styles.linksWrapper}>
            {/* Column 1 */}
            <ul className={styles.linkList}>
              <li>
                <Link href="/search" className={styles.footerLink}>
                  Featured Courses
                </Link>
              </li>
              <li>
                <Link href="/search" className={styles.footerLink}>
                  Featured Categories
                </Link>
              </li>
              <li>
                <Link href="/search" className={styles.footerLink}>
                  Business
                </Link>
              </li>
              <li>
                <Link href="/search" className={styles.footerLink}>
                  IT
                </Link>
              </li>
              <li>
                <Link href="/search" className={styles.footerLink}>
                  Design
                </Link>
              </li>
            </ul>

            {/* Column 2 */}
            <ul className={styles.linkList}>
              <li>
                <Link href="/search" className={styles.footerLink}>
                  Development
                </Link>
              </li>
              <li>
                <Link href="/search" className={styles.footerLink}>
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/search" className={styles.footerLink}>
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/search" className={styles.footerLink}>
                  Finance
                </Link>
              </li>
              <li>
                <Link href="/search" className={styles.footerLink}>
                  Sport
                </Link>
              </li>
            </ul>

            {/* Column 3 */}
            <ul className={styles.linkList}>
              <li>
                <Link href="/creator-profile" className={styles.footerLink}>
                  Become a Creator
                </Link>
              </li>
              <li>
                <Link href="/course-details" className={styles.footerLink}>
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="/login" className={styles.footerLink}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/register" className={styles.footerLink}>
                  Help
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright Section */}
        <div className={styles.copyrightSection}>
          <div className={styles.dividerLine} />
          <div className={styles.copyrightRow}>
            <p className={styles.copyrightText}>
              @ 2023 ByteSpace. All rights reserved.
            </p>

            <div className={styles.legalLinks}>
              <Link href="/privacy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={styles.legalLink}>
                Terms of Service
              </Link>
              <Link href="/cookies" className={styles.legalLink}>
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
