import React from "react";
import styles from "../styles/MoreWork.module.css";
import FeaturedWorkLarge from "./FeaturedWorkLarge";
import FeaturedWorkSmall from "./FeaturedWorkSmall";
import Link from "next/link";
import FeaturedWorkSmallDesktop from "./FeaturedWorkSmallDesktop";

export default function HomepageMoreWorks({ projects }) {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>More Work</h3>
      </div>
      <div className={styles.divider}>{""}</div>
      <div className={styles.featuredWorksWrapperMobile}>
        <div className={styles.smallWorksWrapper}>
          <FeaturedWorkSmall project={projects[2]} />
          <FeaturedWorkSmall project={projects[3]} />
        </div>
        <div className={styles.fancyDivider}>{""}</div>
        <div className={styles.smallWorksWrapper}>
          <FeaturedWorkSmall project={projects[4]} />
          <FeaturedWorkSmall project={projects[5]} />
        </div>
        <div className={styles.fancyDivider}>{""}</div>
        <div className={styles.smallWorksWrapper}>
          <FeaturedWorkSmall project={projects[6]} />
          <FeaturedWorkSmall project={projects[7]} />
        </div>
      </div>
      <div className={styles.featuredWorksWrapperTablet}>
        <div className={styles.smallWorksWrapper}>
          <FeaturedWorkSmall project={projects[2]} />
          <FeaturedWorkSmall project={projects[3]} />
          <FeaturedWorkSmall project={projects[4]} />
        </div>
        <div className={styles.fancyDivider}>{""}</div>
        <div className={styles.smallWorksWrapper}>
          <FeaturedWorkSmall project={projects[5]} />
          <FeaturedWorkSmall project={projects[6]} />
          <FeaturedWorkSmall project={projects[7]} />
        </div>
      </div>
      <div className={styles.featuredWorksWrapperDesktop}>
        <div className={styles.smallWorksWrapper}>
          <FeaturedWorkSmallDesktop project={projects[2]} />
          <FeaturedWorkSmallDesktop project={projects[3]} />
          <FeaturedWorkSmallDesktop project={projects[4]} />
        </div>
        <div className={styles.fancyDivider}>{""}</div>
        <div className={styles.smallWorksWrapper}>
          <FeaturedWorkSmallDesktop project={projects[5]} />
          <FeaturedWorkSmallDesktop project={projects[6]} />
          <FeaturedWorkSmallDesktop project={projects[7]} />
        </div>
        <div className={styles.fancyDivider}>{""}</div>
        <div className={styles.smallWorksWrapper}>
          <FeaturedWorkSmallDesktop project={projects[8]} />
          <FeaturedWorkSmallDesktop project={projects[9]} />
          <FeaturedWorkSmallDesktop project={projects[10]} />
        </div>
      </div>
      <Link href={"/portfolio"} target={"_top"} className={styles.button}>
        View All
      </Link>
    </div>
  );
}
