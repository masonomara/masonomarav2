import React from "react";
import styles from "../../styles/AboutMason.module.css";

export const metadata = {
  title: "Abouts",
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
            Hello! I'm Mason O'Mara, currently serving as the Technical Projects
            Manager at Current Media Company.My expertise lies in empowering
            businesses to establish a robust digital presence through website
            development, branding, and product design and I have a passion for
            digital innovation.
          </p>

          <h3 className="titleBlogSmall">How I Got Here</h3>
          <p>
            If you stumbled upon my website while searching my name, you might
            have discovered my background as a Division 1 Baseball player at
            George Mason University. While pursuing my passion for sports, I
            also delved into economics, earning a Bachelor's degree. Initially
            on a finance career path disrupted by COVID, I embraced freelancing,
            taking on diverse projects in website development and digital
            content. As I explored online business development, coding evolved
            from a hobby to a serious pursuit.
          </p>

          <h3 className="titleBlogSmall">Passion for My Work</h3>
          <p>
            My journey involved developing online business presences, witnessing
            tangible results, and diving into coding. This journey fueled a
            passion for building digital products. Studying user-focused design
            and exploring new technologies became my focus, shaping a new
            professional chapter.
          </p>
          <h3 className="titleBlogSmall">
            Scalability, Creativity, and Transparency
          </h3>
          <p>
            A consistent theme in my work revolves around clear and effective
            communication with clients. I prioritize fully understanding their
            needs, ensuring alignment with their future brand or project plans.
            I don't shy away from infusing creative elements or leveraging new
            technologies. My commitment is rooted in transparency, guiding
            clients in the right direction.
          </p>
          <h3 className="titleBlogSmall">Get in Touch</h3>
          <p>
            For new business inquiries, please fill in{" "}
            <a target={"_blank"} href={"/contact"}>
              this form
            </a>
            . Feel free to reach me at my email{" "}
            <a target={"_blank"} href={"mailto:mason.omara@gmail.com"}>
              mason.omara@gmail.com.
            </a>{" "}
            Currently based in and enjoying Asbury Park, New Jersey.
          </p>
        </div>
      </div>
    </div>
  );
}
