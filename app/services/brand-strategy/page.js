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
        Establish a distinctive brand that connects with your audience through a thoughtful blend of design, user research, graphics, and messaging for a lasting impact.
        </p>
      </div>
      <SubServices
        header={"Brand & Content"}
        title1={"Foundational Design Systems"}
        description1={
          "Develop a visually engaging design system with careful consideration of color schemes, typography, accessibility, and interactive elements. This ensures a cohesive and visually appealing system for all interactions, presented in easily digestible formats for your team's seamless use."
        }
        title2={"Graphic Design & Assets"}
        description2={
          "Build a memorable brand identity across various mediums with scalable and consistent assets. Logos and graphics are created with a professional yet creative touch, ensuring a cohesive brand identity that resonates with your audience."
        }
        title3={"Messaging & Content"}
        description3={
          "Align your brand strategy with concise summaries of user research, insights, and communication guidelines. Utilize strategy guides to tailor your tone of voice to different mediums, strategically guiding where and how messages are communicated. Compelling copywriting, crafted for improved SEO and engaging storytelling, drives audience engagement."
        }
      />
    </div>
  );
}
