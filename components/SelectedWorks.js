import React from "react";
import styles from "../styles/SelectedWorks.module.css";
import FeaturedWorkLarge from "./FeaturedWorkLarge";

export default function SelectedWorks() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>Selected Works</h3>
      </div>
      <div className={styles.divider}>{""}</div>
      <div className={styles.featuredWorksWrapper}>
        <FeaturedWorkLarge />
        <FeaturedWorkLarge />
      </div>
    </div>
  );
}
