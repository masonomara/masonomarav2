import React from "react";
import styles from "../styles/MoreWork.module.css";
import FeaturedWorkLarge from "./FeaturedWorkLarge";
import FeaturedWorkSmall from "./FeaturedWorkSmall";

export default function HomepageMoreWorks({ projects }) {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>More Work</h3>
      </div>
      <div className={styles.divider}>{""}</div>
      <div className={styles.featuredWorksWrapperMobile}>
        <div className={styles.smallWorksWrapper}>
          <FeaturedWorkSmall project={projects[3]} />
          <FeaturedWorkSmall project={projects[4]} />
        </div>
        <div className={styles.fancyDivider}>{""}</div>
        <FeaturedWorkLarge project={projects[2]} />
        <div className={styles.fancyDivider}>{""}</div>
        <div className={styles.smallWorksWrapper}>
          <FeaturedWorkSmall project={projects[5]} />
          <FeaturedWorkSmall project={projects[6]} />
        </div>
      </div>
      <div className={styles.featuredWorksWrapperDesktop}>
        <div className={styles.smallWorksWrapper}>
          <FeaturedWorkSmall project={projects[4]} />
          <FeaturedWorkSmall project={projects[5]} />
          <FeaturedWorkSmall project={projects[6]} />
        </div>
        <div className={styles.fancyDivider}>{""}</div>
        <FeaturedWorkLarge project={projects[2]} />
        <FeaturedWorkLarge project={projects[3]} />
        <div className={styles.fancyDivider}>{""}</div>
        <div className={styles.smallWorksWrapper}>
          <FeaturedWorkSmall project={projects[7]} />
          <FeaturedWorkSmall project={projects[8]} />
          <FeaturedWorkSmall project={projects[9]} />
        </div>
      </div>
    </div>
  );
}