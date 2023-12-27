"use client";

import { Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { Analytics } from "@vercel/analytics/react";
import { createClient } from "contentful";
import { createContext } from "react";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const contentfulAccessKey = process.env.CONTENTFUL_ACCESS_KEY;

const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Mason O'Mara | Scalable Development & Creative Design",
    template: "Mason O'Mara | %s",
  },
  icons: {
    icon: "favicon.ico",
  },
  description:
    "Mason O'Mara is a technical developer and creative designer building intuitive and engaging products with a focus on business objectives and user experience.",
};

const ContentfulContext = createContext();

async function fetchContentfulData() {
  const client = createClient({
    space: spaceId,
    accessToken: contentfulAccessKey,
  });

  const res = await client.getEntries({ content_type: "clientList" });

  return res.items;
}

async function Layout({ children }) {
  const [res, setRes] = useState([]);

  // Fetch Contentful data on component mount
  useEffect(() => {
    async function fetchData() {
      const data = await fetchContentfulData();
      setRes(data);
    }

    fetchData();
  }, []);
  return (
    <html lang="en">
      <body className={`${publicSans.className}`}>
        {/* Provide the Contentful data through context */}
        <ContentfulContext.Provider value={res}>
          <Header />
          {children}
        </ContentfulContext.Provider>
        <Analytics />
      </body>
    </html>
  );
}

// Hook to access the Contentful context in child components
export function useContentfulContext() {
  return useContext(ContentfulContext);
}

export default Layout;
