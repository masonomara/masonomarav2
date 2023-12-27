import React from "react";
import styles from "../styles/SelectedWorks.module.css";
import FeaturedWorkLarge from "./FeaturedWorkLarge";

export default function SelectedWorks() {
  return (
    <div className={styles.container}>
      <div>
        <h3>Selected Works</h3>
        <div>{""}</div>
      </div>
      <div className={styles.featuredWorksWrapper}>
        <FeaturedWorkLarge />
        <FeaturedWorkLarge />
      </div>
    </div>
  );
}
