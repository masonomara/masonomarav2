// contentful.js

import { createClient } from "contentful";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const contentfulAccessKey = process.env.CONTENTFUL_ACCESS_KEY;

const client = createClient({
  space: spaceId,
  accessToken: contentfulAccessKey,
});

export const fetchProjects = async () => {
  try {
    const res = await client.getEntries({ content_type: "clientList" });
    return res.items;
  } catch (error) {
    console.error("Error fetching projects from Contentful:", error);
    return [];
  }
};
