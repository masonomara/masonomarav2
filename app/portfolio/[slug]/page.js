import React from "react";
import { createClient } from "contentful";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/ProjectPage.module.css";
import ProjectPageHeader from "@/components/ProjectPageHeader";
import { ProjectContent } from "@/components/ProjectPageContent";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const contentfulAccessKey = process.env.CONTENTFUL_ACCESS_KEY;

export async function generateStaticParams() {
  const client = createClient({
    space: spaceId,
    accessToken: contentfulAccessKey,
  });

  const { items } = await client.getEntries({
    content_type: "clientList",
  });

  return items.map((project) => ({
    params: {
      slug: project.fields.slug,
    },
  }));
}

export async function getProject(slug) {
  const client = createClient({
    space: spaceId,
    accessToken: contentfulAccessKey,
  });

  const { items } = await client.getEntries({
    content_type: "clientList",
    "fields.slug": slug,
  });

  if (items.length === 0) {
    return null; // Event not found
  }

  return items[0];
}

export default async function portfolioPage({ params }) {
  const { slug } = params;
  const project = await getProject(slug);

  return (
    <div className={styles.container}>
      <Link className={styles.portfolioWrapper} href={"/portfolio"}>
        <Image className={styles.portfolioArrow} alt={"arrow"} src={"/arrowRedPoint.png"} width={16} height={16} />
        <span className={styles.portfolioText}>Back to full portfolio</span>
      </Link>
      <div classname={styles.mainHeaderWrapper}>
        <ProjectPageHeader project={project} />
        <ProjectContent project={project} />
        {/* <h1 className="titleMedium">{project.fields.title}</h1>
        <div className={styles.imageWrapper}>
          <Image
            alt={project?.fields.title}
            src={"https:" + project?.fields.coverImage.fields.file.url || null}
            fill
            sizes="50vw"
            priority
          />
        </div> */}
      </div>
    </div>
  );
}
