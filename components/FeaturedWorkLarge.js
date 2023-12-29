import React from "react";
import styles from "../styles/FeaturedWorkLarge.module.css";
import Image from "next/image";

export default function FeaturedWorkLarge({ project }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2 class="titleLarge">{project?.fields.title || "Project Title"}</h2>
        <p className={styles.subtitle}>
          {project?.fields.subtitle || "Project Subtitle"}
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={"https:" + project?.fields.coverImage.fields.file.url || null}
          fill
        />
      </div>
    </div>
  );
}
