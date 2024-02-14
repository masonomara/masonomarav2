import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import React from "react";
import styles from "../../styles/ContactForm.module.css";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.subtitle}>
          Excited for opportunities building custom mobile and web applications, e-commerce
          solutions, web design, branding, business workflows, and product
          scalability.
        </p>
        <p className={styles.header}>New Business and Inquiries</p>
        <Link
          href={"mailto:mason.omara@gamil.com"}
          target={"_blank"}
          className={styles.emailLink}
        >
          <p>mason.omara@gmail.com</p>
        </Link>
        <p className={styles.header}>Office Location</p>
        <Link
          href={
            "https://www.google.com/maps/dir/40.2098801,-74.0242841/Current+Media+Company,+1301+Corlies+Ave+Suite+2D,+Neptune+City,+NJ+07712/@40.2099178,-74.0267435,17z/data=!3m1!4b1!4m18!1m7!3m6!1s0x2aaba72f78ae592f:0x471c3c6409d7ff16!2sCurrent+Media+Company!8m2!3d40.2100309!4d-74.0240908!16s%2Fg%2F11p09n7wjt!4m9!1m1!4e1!1m5!1m1!1s0x2aaba72f78ae592f:0x471c3c6409d7ff16!2m2!1d-74.0240908!2d40.2100309!3e0?entry=ttu"
          }
          target={"_blank"}
          className={styles.emailLink}
        >
          <p>1301 Corlies Ave, Neptune NJ Suite 2D</p>
        </Link>
      </div>
      <ContactForm />
    </div>
  );
}
