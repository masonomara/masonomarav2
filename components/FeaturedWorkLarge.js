import React from "react";
import styles from "../styles/FeaturedWorkLarge.module.css";
import Image from "next/image";

export default function FeaturedWorkLarge() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>Cureader</h2>
        <p className={styles.subtitle}>
          A conscious RSS Reader available on the App Store.
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <Image src={"/work/cureader.png"} fill />
      </div>
    </div>
  );
}
