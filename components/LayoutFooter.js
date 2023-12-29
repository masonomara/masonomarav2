"use client";

import React, { useState } from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function LayoutFooter() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const pauseMenu = () => {
    setMenuOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.linksWrapper}>
          <Link href={"/"} target={"_top"} className={styles.linkWrapper}>
            <p className={styles.linkTitle}>Portfolio</p>
            <p className={styles.linkSubtitle}>Projects I've worked on.</p>
          </Link>
          <Link href={"/"} target={"_top"} className={styles.linkWrapper}>
            <p className={styles.linkTitle}>Services</p>
            <p className={styles.linkSubtitle}>Services I offer.</p>
          </Link>
          <Link href={"/"} target={"_top"} className={styles.linkWrapper}>
            <p className={styles.linkTitle}>About</p>
            <p className={styles.linkSubtitle}>More about me.</p>
          </Link>
          <Link href={"/"} target={"_top"} className={styles.linkWrapper}>
            <p className={styles.linkTitle}>Blog</p>
            <p className={styles.linkSubtitle}>My latest articles.</p>
          </Link>
          <Link href={"/"} target={"_top"} className={styles.linkWrapper}>
            <p className={styles.linkTitle}>Contact</p>
            <p className={styles.linkSubtitle}>
              New business and inquiries.
            </p>
          </Link>
        </div>
        <Link href={"/contact"} target={"_top"} className={styles.button}>
          Get Started
        </Link>
        <div className={styles.subtitleWrapper}>
          <span className={styles.subtitle}>
            New business and inquiries to{" "}
            <Link
              href={"mailto:mason.omara@gamil.com"}
              target={"_blank"}
              className={styles.emailLink}
            >
              <span>mason.omara@gmail.com</span>
            </Link>
            .
          </span>
          <span className={styles.subtitle}>
            Currently based in Neptune, NJ.
          </span>
          <span className={styles.subtitle}>
            Focuses include websites, branding, apps, e-commerce, and product
            design.
          </span>
        </div>
      </div>
    </div>
  );
}