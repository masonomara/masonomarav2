"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function LayoutHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [reg, setReg] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 60) {
      setReg(false);
    }

    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const pauseMenu = () => {
    setMenuOpen(true);
  };

  return (
    <>
      <div className={`headerblock active${show} default${reg}`}>{""}</div>
      <div className={`${styles.container} header active${show} default${reg}`}>
        {/* <div className={`${styles.container}`}> */}
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
                <Link
                  href={"/"}
                  target={"_top"}
                  className={styles.titleWrapper}
                >
                  <p className={styles.headerTitle}>Mason O’Mara</p>
                </Link>

                <div className={styles.menuOpen} onClick={handleMenu}>
                  <span className={styles.fullMenuClose}>Close</span>
                </div>
              </div>
              <Link
                className={styles.fullMenuItem}
                href={"/portfolio"}
                target={"_top"}
              >
                <span className="titleSmall">Portfolio</span>
                <span className={styles.fullMenuItemDescription}>
                  Explore Selected Work
                </span>
              </Link>
              <Link
                className={styles.fullMenuItem}
                href={"/services"}
                target={"_top"}
              >
                <span className="titleSmall">Services</span>
                <span className={styles.fullMenuItemDescription}>
                  Flexible and Scalable Solutions
                </span>
              </Link>
              <Link
                className={styles.fullMenuItem}
                href={"/about"}
                target={"_top"}
              >
                <span className="titleSmall">About</span>
                <span className={styles.fullMenuItemDescription}>
                  Building Digital Presences
                </span>
              </Link>
              <Link
                className={styles.fullMenuItem}
                href={"/blog"}
                target={"_top"}
              >
                <span className="titleSmall">Blog</span>
                <span className={styles.fullMenuItemDescription}>
                  Insights and Advice
                </span>
              </Link>
              <Link
                className={styles.fullMenuItem}
                href={"/contact"}
                target={"_top"}
              >
                <span className="titleSmall">Contact</span>
                <span className={styles.fullMenuItemDescription}>
                  New Business and Inquiries
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.wrapper}>
          <Link href={"/"} target={"_top"} className={styles.titleWrapper}>
            <p className={styles.headerTitle}>Mason O’Mara</p>
          </Link>

          <div className={styles.menuOpen} onClick={handleMenu}>
            <span className={styles.menuText}>Menu</span>
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
            <Link
              className={styles.menuButton}
              href={"/contact"}
              target={"_top"}
            >
              <span className={styles.menuText}>Contact</span>
            </Link>
          </div>
          <Link className={styles.cta} target="_top" href="/contact">
            <span className={styles.ctaText}>Get Started</span>
          </Link>
        </div>
      </div>
    </>
  );
}
