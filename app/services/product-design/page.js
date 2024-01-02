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
        <h1 className="titlePageSubtitle">Product Design</h1>
        <p className={styles.subtitle}>
          Blending technical experience and UX design principles with a creative
          flair to create innovative and intuitive solutions.
        </p>
      </div>
      <SubServices
        header={"Product Design"}
        title1={"User Experience Design"}
        description1={
          "Utilize customer research, feedback, industry best practices, and your business objectives to create user-centric and accessible digital products."
        }
        title2={"Custom Mobile Applications"}
        description2={
          "Developing engaging and delightful apps using both back-end and front-end technologies, packaged for the App Store."
        }
        title3={"Creative Solutions"}
        description3={
          "Utilizing custom capabilities and a creative approach to design memorable and unique products consistent with your brand."
        }
      />
    </div>
  );
}
