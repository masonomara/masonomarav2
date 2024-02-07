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
        Develop a well-designed product with a human-centered approach that aligns with business objectives, ensures flexibility across platforms, and integrates user research seamlessly throughout the design process for a successful product.
        </p>
      </div>
      <SubServices
        header={"Product Design"}
        title1={"Foundational User Research"}
        description1={
          "Embrace qualitative primary user research to understand the target audience's needs, goals, expectations, and tasks. Stakeholder input contributes to value propositions, device usage, competitor audits, and brainstorming. Informed design decisions consider user needs at different stages of the process, ensuring a successful product outcome."
        }
        title2={"Custom Mobile Applications"}
        description2={
          "Define and design products with foundational user research and technical expertise. A dedication to the design process results in well-crafted information architectures, wireframes, mockups, and prototypes. Considering user actions, feedback mechanisms, incentives, and business objectives, the goal is to create realistic and engaging digital products across web and mobile applications."
        }
        title3={"Creative Solutions"}
        description3={
          "Whether working independently or collaboratively, my priority is development with a user-centric and scalable mindset, always seeking opportunities to add a creative flair. This approach ensures well-executed post-launch research and facilitates the development of new features. Digital products consistently align with both business goals and user expectations."
        }
      />
    </div>
  );
}
