import { Public_Sans } from "next/font/google";
import "./globals.css";
import LayoutHeader from "../components/LayoutHeader";
import { Analytics } from "@vercel/analytics/react";
import LayoutFooter from "@/components/LayoutFooter";
import Script from "next/script";

const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Mason O’Mara",
    template: "Mason O’Mara | %s",
  },
  icons: {
    icon: "favicon.ico",
  },
  description:
    "Technical developer and creative designer building intuitive and engaging products with a focus on business objectives and user experience.",
  openGraph: {
    description:
      "Technical developer and creative designer building intuitive and engaging products with a focus on business objectives and user experience.",
    images: [
      {
        url: "/social.png",
      },
    ],
  },
};

async function Layout({ children }) {
  return (
    <html lang="en">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
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
