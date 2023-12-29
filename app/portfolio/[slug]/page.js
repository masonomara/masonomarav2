import React from "react";
import { createClient } from "contentful";
import Link from "next/link";
import Image from "next/image";

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
    <div>
      <Link href={"/portfolio"}>
        <span>Full portfolio</span>
        <Image alt={"arrow"} src={"/redArrow.png"} width={18} height={18} />
      </Link>
      <h1>{project.fields.title}</h1>
    </div>
  );
}
