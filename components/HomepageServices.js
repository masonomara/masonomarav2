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
            <h4 className="titleMedium italic">Product Design</h4>
            <p className={styles.serviceSubtitle}>
              Foundational User Research • Design Tools and Assets • Development
              and Launch
            </p>
            <p className={styles.serviceDescription}>
              Develop a well-designed product with a human-centered approach
              that aligns with business objectives for a successful product.
            </p>
          </div>
          <div className={styles.displayTitleImageWrapper}>
            <Image src={"/arrowRedPoint.png"} fill alt={"arrow"} sizes="10vw" />
          </div>
        </Link>
        <div className={styles.fancyDivider}>{""}</div>
        <Link className={styles.serviceWrapper} href={"/services"}>
          <div className={styles.serviceContentWrapper}>
            <h4 className="titleMedium">Development Solutions</h4>
            <p className={styles.serviceSubtitle}>
              Mobile iOS Apps • Custom Websites & Interfaces • Shopify Stores
            </p>
            <p className={styles.serviceDescription}>
              Improve your online presence with tailored and scalable solutions
              stores aligned with your unique goals.
            </p>
          </div>
          <div className={styles.displayTitleImageWrapper}>
            <Image src={"/arrowRedPoint.png"} fill alt={"arrow"} sizes="10vw" />
          </div>
        </Link>
        <div className={styles.fancyDivider}>{""}</div>
        <Link className={styles.serviceWrapper} href={"/services"}>
          <div className={styles.serviceContentWrapper}>
            <h4 className="titleMedium italic">Brand Strategy</h4>
            <p className={styles.serviceSubtitle}>
              Foundational Design Systems • Graphic Design and Assets •
              Messaging and Content
            </p>
            <p className={styles.serviceDescription}>
              Establish a distinctive brand that connects with your audience for
              a lasting impact.
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
