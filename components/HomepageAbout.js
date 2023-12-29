import React from "react";
import styles from "../styles/HomepageAbout.module.css";
import FeaturedWorkLarge from "./FeaturedWorkLarge";
import Image from "next/image";

export default function HomepageAbout() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>About Mason</h3>
      </div>
      <div className={styles.divider}>{""}</div>
      <div className={styles.contentWrapper}>
        <h4 class="titleDisplay">
          Technical
          <br />
          Development
        </h4>
        <div className={styles.imageWrapper}>
          <Image src={"/hat.png"} fill />
        </div>
        <h4 class="titleDisplay">
          And&nbsp;
          <span class="titleDisplay italic">Design</span>
        </h4>
        <p className={styles.subtitle}>
          Freelance <strong>DEVELOPER</strong> and{" "}
          <strong>DIGITAL PRODUCT DESIGNER</strong> based in Asbury Park, New
          Jersey, operating under Current Media Company.
        </p>
      </div>
    </div>
  );
}
