import React from "react";
import styles from "../../styles/AboutMason.module.css";
import Image from "next/image";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h2 className="titlePageTitle">About</h2>
        <div className={styles.fancyDivider}>{""}</div>
        <div className={styles.richtext__container}>
          <h3 className="titleBlogSmall">About Me</h3>
          <p>
            Hi! I’m Mason O’Mara. I’m currently operating as Technical Projects
            Manager at Current Media Company. I help business establish their
            digital presence helping with websites development, branding, and
            product design. I also have a knack setting up successful events
            every once in a while.
          </p>

          <h3 className="titleBlogSmall italic">How I Got Here</h3>
          <p>
            If you found my website by searching my name, you might have noticed
            I used to play Division 1 Baseball at George Mason University. While
            pursuing my first love, I also enjoyed studying economics and earned
            a Bachelors degree in the subject. My initial job search in finance
            was disrupted during COVID, so I began freelancing, taking on
            projects involving website development and various digital content
            tasks, alongside a few other odd jobs.
          </p>
          <p>
            The more opportunities I had developing online businesses presences,
            seeing tangible results, and delving deeper into coding—a hobby
            turned serious—the more I fell in love with building up digital
            products. I began studying user-focused design and pouring over
            documentation for new technologies, and a new passion was born.
          </p>
          <h3 className="titleBlogSmall">
            Scalability, Creativity, and Transparency
          </h3>
          <p>
            A consistent theme in my work is clear and effective communication
            with clients. I strive to fully understanding their needs before
            working with them on a project making certain it aligns with their
            future brand or project plans. This is complimented by never shying
            away from a chance to infuse creative elements, utilize a new
            technology, and a commitment to being transparent and guiding
            clients in the right direction.
          </p>
          <h3 className="titleBlogSmall italic">Get in Touch</h3>
          <p>
            For new business inquiries, please fill in{" "}
            <a target={"_blank"} href={"/contact"}>
              this form
            </a>
            . Feel free to reach me at my email here:{" "}
            <a target={"_blank"} href={"mailto:mason.omara@gmail.com"}>
              mason.omara@gmail.com.
            </a>{" "}
            I’m currently based in and enjoying Asbury Park, New Jersey.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image src={"/hat.png"} fill alt={"Mason's Hat"} sizes="50vw" />
        </div>
      </div>
    </div>
  );
}
