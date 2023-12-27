import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWorks />
    </main>
  );
}
