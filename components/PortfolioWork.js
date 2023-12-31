"use client";

import React, { useState } from "react";
import styles from "../styles/PortfolioWork.module.css";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioWork({ project }) {
  const [projectOpen, setProjectOpen] = useState(false);

  const handleProjectClick = () => {
    setProjectOpen(!projectOpen);
  };

  const handleChildElementClick = (e) => {
    e.stopPropagation();
    // Do other stuff here
  };

  return (
    <div
      onClick={handleProjectClick}
      id={`${project.fields.slug}`}
      className={projectOpen ? styles.containerOpen : styles.container}
    >
      <div
        className={projectOpen ? styles.fancyDividerOpen : styles.fancyDivider}
      >
        {""}
      </div>
      <div className={projectOpen ? styles.wrapperOpen : styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image
            alt={project?.fields.title}
            src={"https:" + project?.fields.coverImage.fields.file.url || null}
            fill
            sizes="50vw"
            priority
          />
        </div>
        <div className={projectOpen ? styles.contentOpen : styles.content}>
          <div className={styles.titleWrapper}>
            <h2 className="titleMedium">
              {project?.fields.title || "Project Title"}
            </h2>
            <div
              className={
                projectOpen
                  ? styles.chevronArrowWrapperOpen
                  : styles.chevronArrowWrapper
              }
            >
              <Image
                alt={"Expand Arrow"}
                src={"/arrowChevron.png"}
                fill
                sizes="10vw"
                className={`${styles.expandArrow}`}
              />

              <Image
                alt={"Expand Arrow"}
                src={"/arrowRedChevron.png"}
                fill
                sizes="10vw"
                className={`${styles.expandArrow} ${styles.expandArrowOpen}`}
              />
            </div>
          </div>

          <p className={styles.subtitle}>
            {project?.fields.subtitle || "Project Subtitle"}
          </p>
          <div className={styles.infoWrapperDesktop}>
            <div className={styles.descriptionWrapper}>
              <p className={styles.descriptionheader}>Overview</p>
              <span className={styles.description}>
                {project?.fields.highlight1}&nbsp;
                <Link
                  onClick={(e) => handleChildElementClick(e)}
                  className={`${styles.description} ${styles.descriptionLink}`}
                  href={"/portfolio/" + project.fields.slug}
                >
                  <span>
                    Read More
                    <Image src={"/arrowSmall.png"} height={15} width={15} />
                  </span>
                </Link>
              </span>
            </div>
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
          </div>
        </div>
        <div
          className={projectOpen ? styles.infoWrapperOpen : styles.infoWrapper}
        >
          <div className={styles.descriptionWrapper}>
            <p className={styles.descriptionheader}>Overview</p>
            <span className={styles.description}>
              {project?.fields.highlight1}&nbsp;
              <Link
                onClick={(e) => handleChildElementClick(e)}
                className={`${styles.description} ${styles.descriptionLink}`}
                href={"/portfolio/" + project.fields.slug}
              >
                <span>
                  Read More
                  <Image src={"/arrowSmall.png"} height={15} width={15} />
                </span>
              </Link>
            </span>
          </div>
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
                onClick={(e) => handleChildElementClick(e)}
                className={`${styles.description} ${styles.descriptionLink}`}
                href={project.fields.url}
              >
                <span>
                  {project.fields.url}&nbsp;
                  <Image src={"/arrowExternal.png"} height={15} width={15} />
                </span>
              </Link>
            </span>
          </div>

          <div className={styles.photoGalleryWrapper}>
            <div className={styles.photoGallery}>
              {project.fields.imageGallery?.slice(0, 3).map((image, index) => (
                <div key={image.sys.id} className={styles.photo}>
                  <Image
                    src={"https:" + image.fields.file.url}
                    alt={image.fields.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )) || <div>{""}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
