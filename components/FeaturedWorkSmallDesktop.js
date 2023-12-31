import React from "react";
import styles from "../styles/FeaturedWorkSmallDesktop.module.css";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedWorkSmallDesktop({ project }) {
  return (
    <Link href={"/portfolio/" + project.fields.slug} className={styles.wrapper}>
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
          src={"https:" + project?.fields.coverImage.fields.file.url || null}
          fill
          sizes="50vw"
          priority
        />
      </div>
    </Link>
  );
}
