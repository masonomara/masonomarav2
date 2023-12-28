import AboutMason from "@/components/AboutMason";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import { createClient } from "contentful";

async function Home() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: "clientList" });

  return (
    <main>
      <Hero />
      <SelectedWorks selectedWorks={res.items} />
      <AboutMason />
    </main>
  );
}

export default Home;
