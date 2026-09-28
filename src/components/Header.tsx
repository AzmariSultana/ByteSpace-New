"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
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
            <Image
              src="/assets/svgs/icon-bag.svg"
              alt="Cart"
              width={24}
              height={24}
            />
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
      </div>
    </header>
  );
}
