import HomepageAbout from "@/components/HomepageAbout";
import HomepageHero from "@/components/HomepageHero";
import HomepageServices from "@/components/HomepageServices";
import HomepageMoreWorks from "@/components/HomepageMoreWorks";
import HomepageSelectedWorks from "@/components/HomepageSelectedWorks";
import { createClient } from "contentful";

async function Home() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: "clientList" });

  const projects = res.items
    .slice()
    .sort((a, b) => b.fields.number - a.fields.number)
    .filter(
      (project) =>
        project.fields.title !== "CaptureNoire" &&
        project.fields.title !== "Train"
    );

  return (
    <main>
      <HomepageHero />
      <HomepageSelectedWorks projects={projects} />
      <HomepageAbout />
      <HomepageServices />
      <HomepageMoreWorks projects={projects} />
    </main>
  );
}

export default Home;
