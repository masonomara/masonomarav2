import React from "react";
import styles from "../styles/HomepageServices.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HomepageServices({
  header,
  title1,
  description1,
  title2,
  description2,
  title3,
  description3,
}) {
  return (
    <div>
      <div className={styles.titleWrapper}>
        <h6 className={styles.title}>{header}&nbsp;Specifics</h6>
      </div>
      <div className={styles.divider}>{""}</div>
      <div className={styles.contentWrapper}>
        <div className={styles.serviceWrapper} href={"/services"}>
          <div className={styles.serviceContentWrapper}>
            <h4 className="titleMedium italic">{title1}</h4>
            <p className={styles.serviceDescrption}>{description1}</p>
          </div>
        </div>
        <div className={styles.fancyDivider}>{""}</div>
        <div className={styles.serviceWrapper} href={"/services"}>
          <div className={styles.serviceContentWrapper}>
            <h4 className="titleMedium">{title2}</h4>
            <p className={styles.serviceDescrption}>{description2}</p>
          </div>
        </div>
        <div className={styles.fancyDivider}>{""}</div>
        <div className={styles.serviceWrapper}>
          <div className={styles.serviceContentWrapper}>
            <h4 className="titleMedium italic">{title3}</h4>
            <p className={styles.serviceDescrption}>{description3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
