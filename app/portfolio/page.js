import React from "react";
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
      <div className={styles.contentWrapper}>
        <h1 className="titlePageTitle">Portfolio</h1>
        <p className={styles.subtitle}>
          A collection of selected projects I’ve worked on, including custom mobile and
          web applications to successful e-commerce solutions.
        </p>
      </div>
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
