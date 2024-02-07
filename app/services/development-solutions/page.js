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
        <h1 className="titlePageSubtitle">Development Solutions</h1>
        <p className={styles.subtitle}>
        Improve your online presence with tailored and scalable solutions built on cutting-edge technology and user-centric practices for intuitive mobile apps, websites, or E-commerce stores aligned with your unique goals.
        </p>
      </div>
      <SubServices
        header={"Development Solutions"}
        title1={"Mobile iOS Apps"}
        description1={
          "Engage your users with delightful iOS apps crafted using technologies like React Native and Expo. Our full-stack solutions ensure a delightful experience on the Apple App Store, aligning seamlessly with user preferences and incorporating custom features for a unique and memorable interaction."
        }
        title2={"Custom Websites & Interfaces"}
        description2={
          "Tailor-made websites and interfaces are developed through customer research, feedback, and industry best practices. Using technologies like React and Next.js, our designs are aligned with business objectives, creating human-centered and accessible digital products that enhance online visibility and organic search traffic."
        }
        title3={"Shopify Stores"}
        description3={
          "Boost your sales and streamline workflows with customized Shopify stores employing a multifaceted approach. Our stores, equipped with multiple sales channels, automated systems, and improved inventory management, resonate with your target audience. Integration of third-party and native plugins, along with custom themes, ensures a seamless shopping experience."
        }
      />
    </div>
  );
}
