"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  activeNav?: "home" | "courses" | "creators" | "none";
}

export default function PageHeader({ activeNav }: PageHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isCourses = activeNav ? activeNav === "courses" : pathname?.startsWith("/search") || pathname?.startsWith("/course");
  const isCreators = activeNav ? activeNav === "creators" : pathname?.startsWith("/creator-profile");
  const isHome = activeNav ? activeNav === "home" : pathname === "/";

  return (
    <header className={styles.header}>
      {/* Logo */}
      <Link href="/" className={styles.logo} aria-label="ByteSpace Home">
        <Image
          src="/assets/svgs/logo.svg"
          alt="ByteSpace"
          width={171}
          height={37}
          priority
        />
      </Link>

      {/* Navigation Links */}
      <nav
        className={`${styles.nav} ${mobileMenuOpen ? styles.navMobileOpen : ""}`}
        aria-label="Main Navigation"
      >
        <Link
          href="/"
          className={`${styles.navLink} ${isHome ? styles.navLinkActive : ""}`}
        >
          Home
        </Link>
        <Link
          href="/search"
          className={`${styles.navLink} ${isCourses ? styles.navLinkActive : ""}`}
        >
          Courses
        </Link>
        <Link
          href="/creator-profile"
          className={`${styles.navLink} ${isCreators ? styles.navLinkActive : ""}`}
        >
          Creators
        </Link>
      </nav>

      {/* Actions */}
      <div className={styles.actions}>
        <Link href="/login" className={styles.signInBtn}>
          Sign In
        </Link>
        <Link href="/register" className={styles.joinBtn}>
          Join Us
        </Link>
        <Link href="/search" className={styles.cartBtn} aria-label="View Cart">
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
        </Link>

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
