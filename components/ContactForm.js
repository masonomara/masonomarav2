"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/send-email";
import styles from "../styles/ContactForm.module.css";

const ContactForm = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { isValid, isSubmitSuccessful } = formState;

  function onSubmit(data) {
    setIsSubmitting(true);
    sendEmail(data);

    // Simulate a delay of 3 seconds before resetting isSubmitting
    setTimeout(() => {
      setIsSubmitting(false);
      reset();
    }, 2000);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
      <div className={styles.labelWrapper}>
        <label htmlFor="name" className={styles.formHeader}>
          Full Name*
        </label>
        <input
          type="text"
          placeholder="John Henry Holliday"
          className={styles.formInput}
          autoComplete="name"
          {...register("name", { required: true })}
        />
      </div>
      <div className={styles.labelWrapper}>
        <label htmlFor="email" className={styles.formHeader}>
          Email Address*
        </label>
        <input
          type="email"
          placeholder="doc@hollidaydentistry.com"
          className={styles.formInput}
          autoComplete="email"
          {...register("email", { required: true })}
        />
      </div>
      <div className={styles.labelWrapper}>
        <label htmlFor="company" className={styles.formHeader}>
          Company Name
        </label>
        <input
          type="text"
          placeholder="Holliday Dentistry"
          className={styles.formInput}
          autoComplete="organization"
          {...register("company", { required: false })}
        />
      </div>
      <div className={styles.labelWrapper}>
        <label htmlFor="startDate" className={styles.formHeader}>
          Target Start Date
        </label>
        <input
          type="text"
          placeholder="mm/dd/yyyy"
          className={styles.formInput}
          {...register("startDate", { required: false })}
        />
      </div>

      <div className={styles.labelWrapper}>
        <label htmlFor="details" className={styles.formHeader}>
          Details
        </label>
        <textarea
          rows={5}
          placeholder="Any additional details you would like to share."
          className={styles.formInputDetails}
          {...register("details", { required: false })}
        ></textarea>
      </div>
      <div>
        <button
          className={`${styles.button} ${
            !isValid ? styles.buttonInactive : ""
          }`}
          disabled={isSubmitSuccessful}
        >
          <span className={styles.buttonText}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
