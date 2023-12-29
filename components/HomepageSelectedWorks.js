import React from "react";
import styles from "../styles/HomepageSelectedWorks.module.css";
import FeaturedWorkLarge from "./FeaturedWorkLarge";

export default function HomepageSelectedWorks({ projects }) {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>Selected Work</h3>
      </div>
      <div className={styles.divider}>{""}</div>
      <div className={styles.featuredWorksWrapper}>
        <FeaturedWorkLarge project={projects[0]} />
        <div className={styles.fancyDivider}>{""}</div>
        <FeaturedWorkLarge project={projects[1]} />
      </div>
    </div>
  );
}
