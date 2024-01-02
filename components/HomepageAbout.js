import React from "react";
import styles from "../styles/HomepageAbout.module.css";
import Image from "next/image";

export default function HomepageAbout() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>About Mason</h3>
      </div>
      <div className={styles.divider}>{""}</div>
      <div className={styles.contentWrapper}>
        <h4 className={styles.titleDisplay}>
          Technical
          <br />
          Development
        </h4>
        <div className={styles.imageWrapper}>
          <Image
            src={"/hat.png"}
            fill
            alt={"Mason's Hat"}
            sizes="50vw"
            priority
          />
        </div>
        <h4 className={styles.titleDisplay}>
          And&nbsp;
          <span className={styles.titleDisplayItalic}>Design</span>
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
