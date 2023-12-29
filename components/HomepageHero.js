import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Hero.module.css";

export default function HomepageHero() {
  return (
    <div className={styles.container}>
      <div className={styles.contentTop}>
        <div className={styles.titleWrapper}>
          <h2 className="titleDisplay">
            Scalabale <br />
            Development
          </h2>
          <h2 className="italic titleDisplay">
            Creative
            <br />
            Application
          </h2>
        </div>
        <p className={styles.subtitle}>
          Building intuitive and engaging products with a focus on business
          objectives and user experience.
        </p>
        <Link href={"/contact"} target={"_top"} className={styles.button}>
          Get Started
        </Link>
      </div>
      <div className={styles.contentBottom}>
        <div className={styles.image}>
          <Image
            src={"/headshot.png"}
            priority
            fill
            alt={"Mason's Headshot"}
            sizes="50vw"
          />
        </div>
      </div>
    </div>
  );
}
