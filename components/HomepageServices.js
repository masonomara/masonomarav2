import React from "react";
import styles from "../styles/HomepageServices.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HomepageServices() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>Services</h3>
      </div>
      <div className={styles.divider}>{""}</div>
      <div className={styles.contentWrapper}>
        <Link className={styles.serviceWrapper} href={"/services"}>
          <div className={styles.serviceContentWrapper}>
            <h4 className="titleMedium italic">Websites</h4>
            <p className={styles.serviceSubtitle}>
              E-Commerce Strategy & Development • Custom Websites & Interfaces •
              Technical & Content SEO
            </p>
            <p className={styles.serviceDescription}>
              Improve your businesses's online presence with a unique and
              scalable website tailored to your goals, complete with an
              effective SEO strategy.
            </p>
          </div>
          <div className={styles.displayTitleImageWrapper}>
            <Image src={"/arrowRedPoint.png"} fill alt={"arrow"} sizes="10vw" />
          </div>
        </Link>
        <div className={styles.fancyDivider}>{""}</div>
        <Link className={styles.serviceWrapper} href={"/services"}>
          <div className={styles.serviceContentWrapper}>
            <h4 className="titleMedium">Brand & Content</h4>
            <p className={styles.serviceSubtitle}>
              Logo and Brand Design • Graphic Design • Copywriting & Content
              Strategy
            </p>
            <p className={styles.serviceDescription}>
              Establish a memorable brand identity applicable across all
              customer touchpoints, resonating with your audience.
            </p>
          </div>
          <div className={styles.displayTitleImageWrapper}>
            <Image src={"/arrowRedPoint.png"} fill alt={"arrow"} sizes="10vw" />
          </div>
        </Link>
        <div className={styles.fancyDivider}>{""}</div>
        <Link className={styles.serviceWrapper} href={"/services"}>
          <div className={styles.serviceContentWrapper}>
            <h4 className="titleMedium italic">Product Design</h4>
            <p className={styles.serviceSubtitle}>
              User Experience Design • Custom Mobile and Web Applications •
              Creative Solutions
            </p>
            <p className={styles.serviceDescription}>
              Blending technical experience and UX design principles with a
              creative flair to create innovative and intuitive solutions.
            </p>
          </div>
          <div className={styles.displayTitleImageWrapper}>
            <Image src={"/arrowRedPoint.png"} fill alt={"arrow"} sizes="10vw" />
          </div>
        </Link>
      </div>
    </div>
  );
}
