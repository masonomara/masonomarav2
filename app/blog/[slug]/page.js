import React from "react";
import { createClient } from "contentful";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/BlogPage.module.css";
import { ProjectContent } from "@/components/ProjectPageContent";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const contentfulAccessKey = process.env.CONTENTFUL_ACCESS_KEY;

export async function generateStaticParams() {
  const client = createClient({
    space: spaceId,
    accessToken: contentfulAccessKey,
  });

  const { items } = await client.getEntries({
    content_type: "bio",
  });

  return items.map((blog) => ({
    params: {
      slug: blog.fields.slug,
    },
  }));
}

export async function getBlog(slug) {
  const client = createClient({
    space: spaceId,
    accessToken: contentfulAccessKey,
  });

  const { items } = await client.getEntries({
    content_type: "bio",
    "fields.slug": slug,
  });

  if (items.length === 0) {
    return null; // Event not found
  }

  return items[0];
}

export default async function BlogPage({ params }) {
  const { slug } = params;
  const blog = await getBlog(slug);

  return (
    <div className={styles.container}>
      <Link className={styles.portfolioWrapper} href={"/blog"}>
        <Image
          className={styles.portfolioArrow}
          alt={"arrow"}
          src={"/arrowRedPoint.png"}
          width={16}
          height={16}
        />
        <span className={styles.portfolioText}>Back to blog</span>
      </Link>
      <div className={styles.mainHeaderWrapper}>
        <h2 className="titlePageSubtitle">
          {blog?.fields.title || "blog Title"}
        </h2>
        <div className={styles.fancyDivider}>{""}</div>
        <ProjectContent project={blog} />
      </div>
    </div>
  );
}
