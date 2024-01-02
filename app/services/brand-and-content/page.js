import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/ServicesSinglePage.module.css";
import SubServices from "@/components/SubServices";

export default async function ServicePage() {
  return (
    <div className={styles.container}>
      <Link className={styles.arrowWrapper} href={"/services"}>
        <Image
          className={styles.arrow}
          alt={"arrow"}
          src={"/arrowRedPoint.png"}
          width={16}
          height={16}
        />
        <span className={styles.arrowTexts}>Back to services</span>
      </Link>
      <div className={styles.mainHeaderWrapper}>
        <h1 className="titlePageSubtitle">Brand & Content</h1>
        <p className={styles.subtitle}>
          Establish a memorable brand identity applicable across all customer
          touchpoints, resonating with your audience.
        </p>
      </div>
      <SubServices
        header={"Brand & Content"}
        title1={"Logo & Brand Design"}
        description1={"Create a memorable and integral part of your brand for various mediums including web and social platforms that truly represents your brand."}
        title2={"Graphic Design"}
        description2={"Design essential digital content and guidelines that are scalable and consistent, blending professionalism and creativity for your brand."}
        title3={"Copywriting & Content"}
        description3={"Engage your audience and improve your SEO with compelling copywriting, delivering messages stories that drive engagement."}
      />
    </div>
  );
}
