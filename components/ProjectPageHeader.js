import React from "react";
import styles from "../styles/ProjectPageHeader.module.css";
import Image from "next/image";
import Link from "next/link";
export default function ProjectPageHeader({ project }) {
  return (
    <>
      <div className={styles.mainWrapper}>
        <h2 className="titlePageTitle">
          {project?.fields.title || "Project Title"}
        </h2>
        <p className={styles.subtitle}>{project?.fields.highlight1}</p>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image
              alt={project?.fields.title}
              src={
                "https:" + project?.fields.coverImage.fields.file.url || null
              }
              fill
              sizes="50vw"
              priority
            />
          </div>
          <div className={styles.fancyDivider}>{""}</div>
          <div className={styles.infoWrapper}>
            <div className={styles.descriptionWrapper}>
              <p className={styles.descriptionheader}>Role</p>
              <p className={styles.description}>{project?.fields.role}</p>
            </div>

            <div className={styles.descriptionWrapper}>
              <p className={styles.descriptionheader}>Technology</p>
              <p className={styles.description}>
                {" "}
                {project.fields.tech.map((tech, index) => (
                  <React.Fragment key={index}>
                    {tech}
                    {index < project.fields.tech.length - 1 && ", "}
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div className={styles.descriptionWrapper}>
              <p className={styles.descriptionheader}>Website</p>
              <span className={styles.description}>
                <Link
                  className={`${styles.description} ${styles.descriptionLink}`}
                  href={project.fields.url}
                >
                  <span>
                    {project.fields.url}&nbsp;
                    <Image
                      src={"/arrowRedExternal.png"}
                      height={15}
                      width={15}
                    />
                  </span>
                </Link>
              </span>
            </div>

            {/* <div className={styles.photoGalleryWrapper}>
      <div className={styles.photoGallery}>
        {project.fields.imageGallery?.slice(0, 3).map((image, index) => (
          <div key={image.sys.id} className={styles.photo}>
            <Image
              src={"https:" + image.fields.file.url}
              alt={image.fields.title}
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
        )) || <div>{""}</div>}
      </div>
    </div> */}
          </div>
        </div>
      </div>
    </>
  );
}