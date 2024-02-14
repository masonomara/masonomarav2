"use client";

import React, { useState } from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import AnimatedImage from "./AnimatedImage";

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
          <Link
            href={"/portfolio"}
            target={"_top"}
            className={styles.linkWrapper}
          >
            <p className="titleTiny">Portfolio</p>
            <p className={styles.linkSubtitle}>Explore Selected Work</p>
          </Link>
          <Link
            href={"/services"}
            target={"_top"}
            className={styles.linkWrapper}
          >
            <p className="titleTiny">Services</p>
            <p className={styles.linkSubtitle}>
              Flexible and Scalable Solutions
            </p>
          </Link>
          <Link href={"/about"} target={"_top"} className={styles.linkWrapper}>
            <p className="titleTiny">About</p>
            <p className={styles.linkSubtitle}>Building Digital Presences </p>
          </Link>
          <Link href={"/blog"} target={"_top"} className={styles.linkWrapper}>
            <p className="titleTiny">Blog</p>
            <p className={styles.linkSubtitle}>Insights and Advice</p>
          </Link>
          <Link
            href={"/contact"}
            target={"_top"}
            className={styles.linkWrapper}
          >
            <p className="titleTiny">Contact</p>
            <p className={styles.linkSubtitle}>New Business and Inquiries</p>
          </Link>
        </div>
        <div className={styles.footerBottom}>
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
              Currently based in Asbury Park, NJ.
            </span>
            <span className={styles.subtitle}>
              Focuses include product design, development solutions and brand
              strategy.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <AnimatedImage
          src={"/hat.png"}
          fill={true}
          alt={"Mason’s Hat"}
          sizes="50vw"
        />
      </div>
    </div>
  );
}
