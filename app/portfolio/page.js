import Link from "next/link";
import React from "react";
import FeaturedWorkLarge from "@/components/FeaturedWorkLarge";
import { createClient } from "contentful";
import styles from "../../styles/Portfolio.module.css";
import PortfolioWork from "@/components/PortfolioWork";

export const metadata = {
  title: "Portfolio",
};

async function Portfolio() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: "clientList" });

  const projects = res.items
    .slice()
    .sort((a, b) => b.fields.number - a.fields.number);

  return (
    <div className={styles.container}>
      <div className={styles.featuredWorksWrapper}>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <PortfolioWork project={project} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
