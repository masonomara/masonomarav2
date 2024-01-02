import Link from "next/link";
import React from "react";
import styles from "../../styles/ServicesPage.module.css";
import Image from "next/image";

export const metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <h2 className="titlePageTitle">Services</h2>
        <p className={styles.subtitle}>
          Building flexible and scalable solutions across different platforms
          and mediums. Looking for oppurtunities to apply creative branding.
        </p>
      </div>

      <div className={styles.servicesContainerLarge}>
        <Link
          target={"_top"}
          href={"/services/websites"}
          className={styles.servicesWrapperLarge}
        >
          <div>
            <h3 className={styles.servicesTitle}>Websites</h3>
            <p className={styles.servicesWrapperSubtitle}>
              E-Commerce Solutions • Custom Websites & Interfaces • SEO Strategy
            </p>
            <p className={styles.servicesWrapperDescription}>
              Improve your businesses's online presence with a unique and
              scalable website tailored to your goals, complete with an
              effective SEO strategy.
            </p>
          </div>
          <div className={styles.arrowContainer}>
            <div className={styles.arrowWrapper}>
              <Image src={"/arrowRedPoint.png"} fill alt={"arrow"} />
            </div>
          </div>
        </Link>
        <Link
          target={"_top"}
          href={"/services/brand-and-content"}
          className={styles.servicesWrapperLarge}
        >
          <div>
            <h3 className={styles.servicesTitle}>Brand & Content</h3>
            <p className={styles.servicesWrapperSubtitle}>
              Logo and Brand Design • Graphic Design • Copywriting & Content
            </p>
            <p className={styles.servicesWrapperDescription}>
              Establish a memorable brand identity applicable across all
              customer touchpoints, resonating with your audience.
            </p>
          </div>
          <div className={styles.arrowContainer}>
            <div className={styles.arrowWrapper}>
              <Image src={"/arrowRedPoint.png"} fill alt={"arrow"} />
            </div>
          </div>
        </Link>
        <Link
          target={"_top"}
          href={"/services/product-design"}
          className={styles.servicesWrapperLarge}
        >
          <div>
            <h3 className={styles.servicesTitle}>Product Design</h3>
            <p className={styles.servicesWrapperSubtitle}>
              User Experience Design • Custom Mobile Applications • Creative
              Solutions
            </p>
            <p className={styles.servicesWrapperDescription}>
              Blending technical experience and UX design principles with a
              creative flair to create innovative and intuitive solutions.
            </p>
          </div>
          <div className={styles.arrowContainer}>
            <div className={styles.arrowWrapper}>
              <Image src={"/arrowRedPoint.png"} fill alt={"arrow"} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
