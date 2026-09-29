"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Logo */}
      <Link href="/" className={styles.logo} aria-label="ByteSpace Home">
        <Image
          src="/assets/svgs/logo.svg"
          alt="ByteSpace"
          width={171}
          height={35}
          priority
        />
      </Link>

      {/* Navigation Links */}
      <nav
        className={`${styles.nav} ${mobileMenuOpen ? styles.navMobileOpen : ""}`}
        aria-label="Main Navigation"
      >
        <Link href="/" className={`${styles.navLink} ${styles.navLinkActive}`}>
          Home
        </Link>
        <Link href="#courses" className={styles.navLink}>
          Courses
        </Link>
        <Link href="#creators" className={styles.navLink}>
          Creators
        </Link>
      </nav>

      {/* Actions */}
      <div className={styles.actions}>
        <Link href="#signin" className={styles.signInBtn}>
          Sign In
        </Link>
        <Link href="#join" className={styles.joinBtn}>
          Join Us
        </Link>
        <button className={styles.cartBtn} aria-label="View Cart">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f5f5f6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="6" width="16" height="15" rx="3" />
            <path d="M8 6V4a4 4 0 0 1 8 0v2" />
          </svg>
        </button>

        {/* Mobile hamburger */}
        <button
          className={styles.mobileMenuToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
