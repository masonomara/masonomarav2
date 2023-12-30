


import { Public_Sans } from "next/font/google";
import "./globals.css";
import LayoutHeader from "../components/LayoutHeader";
import { Analytics } from "@vercel/analytics/react";
import LayoutFooter from "@/components/LayoutFooter";

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

async function Layout({ children }) {
  return (
    <html lang="en">
      <body className={`${publicSans.className}`}>
        <LayoutHeader />
        {children}
        <Analytics />
        <LayoutFooter />
      </body>
    </html>
  );
}

export default Layout;
