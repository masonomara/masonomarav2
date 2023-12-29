"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function LayoutHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const pauseMenu = () => {
    setMenuOpen(true);
  };

  return (
    <div className={styles.container}>
      <div
        className={
          menuOpen == true ? styles.fullMenuOpen : styles.fullMenuClosed
        }
      >
        <div
          className={menuOpen == true ? styles.closeMenu : styles.hidden}
          onClick={handleMenu}
        />
        <div
          className={
            menuOpen == true
              ? styles.fullMenuWrapperOpen
              : styles.fullMenuWrapperClosed
          }
        >
          <div className={styles.fullMenuTop}>
            <Link className={styles.fullMenuItem} href={"/"} target={"_top"}>
              Homepage
            </Link>
            <Link
              className={styles.fullMenuItem}
              href={"/about-cureader"}
              target={"_top"}
            >
              About Cureader
            </Link>
            <Link
              className={styles.fullMenuItem}
              href={"/what-is-rss"}
              target={"_top"}
            >
              What is RSS?
            </Link>
            <Link
              className={styles.fullMenuItem}
              href={"/contact"}
              target={"_top"}
            >
              Contact
            </Link>
          </div>
          <div className={styles.divider} />
          <div className={styles.policyWrapper}>
            <Link
              className={styles.policyWrapperLink}
              href={"/policy/terms-of-service"}
              target={"_top"}
            >
              Terms of Service
            </Link>
            <Link
              className={styles.policyWrapperLink}
              href={"/policy/privacy-policy"}
              target={"_top"}
            >
              Privacy Policy
            </Link>
            <Link
              className={styles.policyWrapperLink}
              href={"/policy/cookie-policy"}
              target={"_top"}
            >
              Cookie Policy
            </Link>
            <Link
              className={styles.policyWrapperLink}
              href={"/policy/data-breach-response-plan"}
              target={"_top"}
            >
              Data Breach Response Plan
            </Link>
            <Link
              className={styles.policyWrapperLink}
              href={"/policy/ccpa-compliance"}
              target={"_top"}
            >
              CCPA Compliance
            </Link>
            <Link
              className={styles.policyWrapperLink}
              href={"/policy/gdpr-compliance"}
              target={"_top"}
            >
              GDPR Compliance
            </Link>
            <Link
              className={styles.policyWrapperLink}
              href={"/policy/accessibility"}
              target={"_top"}
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        <Link href={"/"} target={"_top"} className={styles.titleWrapper}>
          <p className={styles.headerTitle}>Mason O'Mara</p>
        </Link>
        {menuOpen == false ? (
          <div className={styles.menuOpen} onClick={handleMenu}>
            <span className={styles.menuText}>Menu</span>
          </div>
        ) : (
          <div className={styles.menuOpen} onClick={handleMenu}>
            <span className={styles.menuText}>Close</span>
          </div>
        )}
        <div className={styles.menuDesktop}>
          <Link
            className={styles.menuButton}
            href={"/portfolio"}
            target={"_top"}
          >
            <span className={styles.menuText}>Portfolio</span>
          </Link>
          <Link
            className={styles.menuButton}
            href={"/about-cureader"}
            target={"_top"}
          >
            <span className={styles.menuText}>Services</span>
          </Link>
          <Link
            className={styles.menuButton}
            href={"/what-is-rss"}
            target={"_top"}
          >
            <span className={styles.menuText}>About</span>
          </Link>
          <Link className={styles.menuButton} href={"/contact"} target={"_top"}>
            <span className={styles.menuText}>Blog</span>
          </Link>
          <Link className={styles.menuButton} href={"/contact"} target={"_top"}>
            <span className={styles.menuText}>Contact</span>
          </Link>
        </div>
        <Link className={styles.cta} target="_top" href="/contact">
          <span className={styles.ctaText}>Get Started</span>
        </Link>
      </div>
    </div>
  );
}
