import React from "react";
import styles from "../styles/FeaturedWorkSmall.module.css";
import Image from "next/image";

export default function FeaturedWorkSmall({ project }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          alt={project?.fields.title}
          src={"https:" + project?.fields.coverImage.fields.file.url || null}
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
      </div>
    </div>
  );
}
