"use client";

import React from "react";

import styles from "../styles/ProjectPageContent.module.css";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const contentfulImageLoader = ({ src, width }) => {
  return `${src}?w=${width}`;
};

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <div className={styles.content__image__wrapper}>
          <Image
            loader={contentfulImageLoader}
            src={`https://${node.data.target.fields.file.url}`}
            fill
            alt={node.data.target.fields.description}
          />
        </div>
      );
    },
  },
};

export const ProjectContent = ({ project }) => {
  console.log(project);
  return (
    <div className={styles.richtext__container}>
      {project.fields.coverImage ? (
        <>
          <h4 className="titleBlogSmall">{project.fields.highlight1}</h4>

          <div className={styles.imageWrapper__desktop}>
            <Image
              src={"https:" + project.fields.coverImage.fields.file.url}
              alt={project.fields.title}
              fill
              priority
            />
          </div>
        </>
      ) : (
        <>
          <h4 className="titleBlogSmall">{project.fields.highlight1}</h4>
        </>
      )}

      {!project.fields.contentColumns === 1 ? (
        <div className={styles.content__wrapper}>
          {documentToReactComponents(project.fields.content, renderOptions)}
        </div>
      ) : (
        <div
          className={`${styles.content__wrapper} ${styles.content__wrapper__single}`}
        >
          {documentToReactComponents(project.fields.content, renderOptions)}
        </div>
      )}
    </div>
  );
};
