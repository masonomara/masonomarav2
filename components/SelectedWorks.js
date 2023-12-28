import React from "react";
import styles from "../styles/SelectedWorks.module.css";
import FeaturedWorkLarge from "./FeaturedWorkLarge";

export default function SelectedWorks({ selectedWorks }) {
  const featuredWork = selectedWorks.filter(
    (selectedWork) => selectedWork.fields.topFeatured === true
  );

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>Selected Works</h3>
      </div>
      <div className={styles.divider}>{""}</div>
      <div className={styles.featuredWorksWrapper}>
        <FeaturedWorkLarge project={featuredWork[0]} />
        <div className={styles.fancyDivider}>{""}</div>
        <FeaturedWorkLarge project={featuredWork[1]} />
      </div>
    </div>
  );
}
