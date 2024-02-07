"use clients";

import Link from "next/link";
import React from "react";
import styles from "../styles/Blog.module.css";
import Image from "next/image";

export default function BlogPostList({ blogPost }) {
  console.log({ blogPost });
  return (
    <>
      <div className={styles.fancyDivider}>{""}</div>
      <Link
        href={"/blog/" + blogPost.fields.slug}
        target={"_top"}
        className={styles.blogPostWrapper}
      >
        <div className={styles.blogPostContent}>
          <span className="titleMedium">{blogPost.fields.title}</span>
          <p className={styles.subtitle}>{blogPost.fields.overview}</p>
        </div>
        <div className={styles.arrowWrapper}>
          <Image
            alt={"Expand Arrow"}
            src={"/arrowRedPoint.png"}
            fill
            sizes="10vw"
            className={`${styles.expandArrow}`}
          />
        </div>
      </Link>
    </>
  );
}
