import Link from "next/link";
import React from "react";
import FeaturedWorkLarge from "@/components/FeaturedWorkLarge";
import { createClient } from "contentful";
import styles from "../../styles/Portfolio.module.css"

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
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.subtitle}>
          Mason O’Mara has experience handling custom mobile and web
          applications, e-commerce solutions, web design, branding, business
          workflows, and product scalability.
        </p>
        <p className={styles.header}>New Business & Inquiries</p>
        <Link
          href={"mailto:mason.omara@gamil.com"}
          target={"_blank"}
          className={styles.emailLink}
        >
          <p>mason.omara@gmail.com</p>
        </Link>
        <p className={styles.header}>Office Location</p>
        <Link
          href={
            "https://www.google.com/maps/dir/40.2098801,-74.0242841/Current+Media+Company,+1301+Corlies+Ave+Suite+2D,+Neptune+City,+NJ+07712/@40.2099178,-74.0267435,17z/data=!3m1!4b1!4m18!1m7!3m6!1s0x2aaba72f78ae592f:0x471c3c6409d7ff16!2sCurrent+Media+Company!8m2!3d40.2100309!4d-74.0240908!16s%2Fg%2F11p09n7wjt!4m9!1m1!4e1!1m5!1m1!1s0x2aaba72f78ae592f:0x471c3c6409d7ff16!2m2!1d-74.0240908!2d40.2100309!3e0?entry=ttu"
          }
          target={"_blank"}
          className={styles.emailLink}
        >
          <p>1301 Corlies Ave, Neptune NJ Suite 2D</p>
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.divider}>{""}</div>
        <div className={styles.featuredWorksWrapper}>
          <FeaturedWorkLarge project={projects[0]} />
          <div className={styles.fancyDivider}>{""}</div>
          <FeaturedWorkLarge project={projects[1]} />
          <div className={styles.fancyDivider}>{""}</div>
          <FeaturedWorkLarge project={projects[2]} />
          <div className={styles.fancyDivider}>{""}</div>
          <FeaturedWorkLarge project={projects[3]} />
          <div className={styles.fancyDivider}>{""}</div>
          <FeaturedWorkLarge project={projects[5]} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
