import React from "react";
import styles from "../styles/FeaturedWorkSmall.module.css";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedWorkSmall({ project }) {
  return (
    <>
      <div className="mobile">
        <Link
          href={"/portfolio/" + project.fields.slug}
          className={styles.wrapper}
        >
          <div className={styles.imageWrapper}>
            <Image
              alt={project?.fields.title}
              src={
                "https:" + project?.fields.coverImage.fields.file.url || null
              }
              fill
              sizes="40vw"
              priority
            />
          </div>
          <div className={styles.content}>
            <h2 className="titleSmall">
              {project?.fields.title || "Project Title"}
            </h2>
            <p className={styles.subtitle}>
              {project?.fields.subtitle || "Project Subtitle"}
            </p>
            <span className={styles.readMore}>
              Read More
              <Image src={"/arrowSmall.png"} height={19} width={19} />
            </span>
          </div>
        </Link>
      </div>
      <div className="desktop">
        <Link
          href={"/portfolio/" + project.fields.slug}
          className={styles.wrapper}
        >
          <div className={styles.content}>
            <h2 className="titleLarge">
              {project?.fields.title || "Project Title"}
            </h2>
            <p className={styles.subtitle}>
              {project?.fields.subtitle || "Project Subtitle"}
            </p>
            <span className={styles.readMore}>
              Read More
              <Image src={"/arrowSmall.png"} height={19} width={19} />
            </span>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              alt={project?.fields.title}
              src={
                "https:" + project?.fields.coverImage.fields.file.url || null
              }
              fill
              sizes="50vw"
              priority
            />
          </div>
        </Link>
      </div>
    </>
  );
}
