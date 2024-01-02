import React from "react";
import styles from "../../styles/Blog.module.css";
import { createClient } from "contentful";
import BlogPostList from "@/components/BlogPostList";

export const metadata = {
  title: "Blog",
};

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const contentfulAccessKey = process.env.CONTENTFUL_ACCESS_KEY;

async function Blog() {
  const client = createClient({
    space: spaceId,
    accessToken: contentfulAccessKey,
  });
  const res = await client.getEntries({ content_type: "bio" });

  const blogPosts = res.items;
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <h1 className="titlePageTitle">Blog</h1>
        <p className={styles.subtitle}>
          Insights and advice I wrote to help share some experience and
          reference points.
        </p>
      </div>
      <div className={styles.blogPostsWrapper}>
        {blogPosts.map((blogPost, index) => (
          <BlogPostList key={index} blogPost={blogPost} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
