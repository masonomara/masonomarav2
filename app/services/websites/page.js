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
        <h1 className="titlePageSubtitle">Websites</h1>
        <p className={styles.subtitle}>
          Improve your businesses’s online presence with a unique and scalable
          website tailored to your goals, complete with an effective SEO
          strategy.
        </p>
      </div>
      <SubServices
        header={"Websites"}
        title1={"E-Commerce Solutions"}
        description1={
          "Improve your online engagement and conversions for your business with customized, editable Shopify stores equipped with multiple sales channels."
        }
        title2={"Custom Websites & Interfaces"}
        description2={
          "Designed to reflect your distinct brand identity and provide a fast and intuitive user experience, with a diverse range of functionalities."
        }
        title3={"SEO Strategy"}
        description3={
          "Boost your online visibility and organic search traffic through technical SEO and strategic content."
        }
      />
    </div>
  );
}
