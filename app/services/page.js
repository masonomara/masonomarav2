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
          Developing adaptable and scalable solutions across platforms, eager to
          collaborate with creative teams and create delightful user
          experiences.
        </p>
      </div>

      <div className={styles.servicesContainerLarge}>
        <Link
          target={"_top"}
          href={"/services/websites"}
          className={styles.servicesWrapperLarge}
        >
          <div>
            <h3 className={styles.servicesTitle}>Product Design</h3>
            <p className={styles.servicesWrapperSubtitle}>
              Foundational User Research • Design Tools and Assets • Development
              and Launch
            </p>
            <p className={styles.servicesWrapperDescription}>
              Develop a well-designed product with a human-centered approach
              that aligns with business objectives for a successful product.
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
              Mobile iOS Apps • Custom Websites & Interfaces • Shopify Stores
            </p>
            <p className={styles.servicesWrapperDescription}>
              mprove your online presence with tailored and scalable solutions
              stores aligned with your unique goals.
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
            <h3 className={styles.servicesTitle}>Brand Strategy</h3>
            <p className={styles.servicesWrapperSubtitle}>
              Foundational Design Systems • Graphic Design and Assets •
              Messaging and Content
            </p>
            <p className={styles.servicesWrapperDescription}>
              Establish a distinctive brand that connects with your audience for
              a lasting impact.
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
