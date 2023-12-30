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
            <div className={styles.fullMenuHeader}>
              <Link href={"/"} target={"_top"} className={styles.titleWrapper}>
                <p className={styles.headerTitle}>Mason O'Mara</p>
              </Link>

              <div className={styles.menuOpen} onClick={handleMenu}>
                <span className={styles.fullMenuClose}>Close</span>
                <Image src={"/close.png"} width={18} height={18} />
              </div>
            </div>
            <Link
              className={styles.fullMenuItem}
              href={"/portfolio"}
              target={"_top"}
            >
              <span className="titleSmall">Portfolio</span>
              <span className={styles.fullMenuItemDescription}>Portfolio</span>
            </Link>
            <Link
              className={styles.fullMenuItem}
              href={"/services"}
              target={"_top"}
            >
              <span className="titleSmall">Services</span>
              <span className={styles.fullMenuItemDescription}>Services</span>
            </Link>
            <Link
              className={styles.fullMenuItem}
              href={"/about"}
              target={"_top"}
            >
              <span className="titleSmall">About</span>
              <span className={styles.fullMenuItemDescription}>About</span>
            </Link>
            <Link
              className={styles.fullMenuItem}
              href={"/blog"}
              target={"_top"}
            >
              <span className="titleSmall">Blog</span>
              <span className={styles.fullMenuItemDescription}>Blog</span>
            </Link>
            <Link
              className={styles.fullMenuItem}
              href={"/contact"}
              target={"_top"}
            >
              <span className="titleSmall">Contact</span>
              <span className={styles.fullMenuItemDescription}>Contact</span>
            </Link>
          </div>

          <Link className={styles.button} href={"/contact"} target={"_top"}>
            Get Started
          </Link>
        </div>
      </div>

      <div className={styles.wrapper}>
        <Link href={"/"} target={"_top"} className={styles.titleWrapper}>
          <p className={styles.headerTitle}>Mason O'Mara</p>
        </Link>

        <div className={styles.menuOpen} onClick={handleMenu}>
          <span className={styles.menuText}>Menu</span>
          <Image src={"/menu.png"} height={18} width={18} />
        </div>

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
            href={"/services"}
            target={"_top"}
          >
            <span className={styles.menuText}>Services</span>
          </Link>
          <Link className={styles.menuButton} href={"/about"} target={"_top"}>
            <span className={styles.menuText}>About</span>
          </Link>
          <Link className={styles.menuButton} href={"/blog"} target={"_top"}>
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
