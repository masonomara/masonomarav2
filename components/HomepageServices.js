import React from "react";
import styles from "../styles/HomepageServices.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HomepageServices() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>Services</h3>
      </div>
      <div className={styles.divider}>{""}</div>
      <div className={styles.contentWrapper}>
        <Link className={styles.serviceWrapper} href={"/services"}>
          <div className={styles.serviceContentWrapper}>
            <h4 className={styles.displayTitleItalic}>Websites</h4>
            <p className={styles.serviceDescrption}>
              From E-Commerce to custom-built solutions, with a focus on SEO and{" "}
            </p>
          </div>
          <div className={styles.displayTitleImageWrapper}>
            <Image src={"/redArrow.png"} fill />
          </div>
          {/* <Link href={"https://masonomara.com"} className={styles.readMoreLink}>
            <span>Read More</span>
            <Image src={"/redArrow.png"} width={18} height={18} />
          </Link> */}
        </Link>
        <div className={styles.fancyDivider}>{""}</div>
        <Link className={styles.serviceWrapper} href={"/services"}>
          <div className={styles.serviceContentWrapper}>
            <h4 className={styles.displayTitle}>Brand & Content</h4>
            <p className={styles.serviceDescrption}>
              From E-Commerce to custom-built solutions, with a focus on SEO and{" "}
            </p>
          </div>
          <div className={styles.displayTitleImageWrapper}>
            <Image src={"/redArrow.png"} fill />
          </div>
        </Link>
        <div className={styles.fancyDivider}>{""}</div>
        <Link className={styles.serviceWrapper} href={"/services"}>
          <div className={styles.serviceContentWrapper}>
            <h4 className={styles.displayTitleItalic}>Product Design</h4>
            <p className={styles.serviceDescrption}>
              From E-Commerce to custom-built solutions, with a focus on SEO and{" "}
            </p>
          </div>
          <div className={styles.displayTitleImageWrapper}>
            <Image src={"/redArrow.png"} fill />
          </div>
        </Link>
      </div>
    </div>
  );
}
