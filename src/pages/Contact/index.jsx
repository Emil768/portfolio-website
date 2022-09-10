import React, { useState } from "react";
import styles from "./Contact.module.scss";

import emailjs from "emailjs-com";

import { ClipLoader } from "react-spinners";

function Contact() {
  const [loading, setLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_vubqzu9",
        "template_bg3j9q9",
        e.target,
        "Q7UCrPjB9lUFde00W"
      )
      .then(
        (result) => {
          setLoading(false);
          alert("Thanks!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong...");
        }
      );
  }

  return (
    <section className={styles.contact}>
      <h1 className={styles.contact__title}>Contact</h1>
      <p className={styles.contact__text}>
        If you have any questions, I'm always happy to discuss them.
      </p>

      <div className={styles.contact__loader}>
        <ClipLoader loading={loading} color="#40b0ee" />
      </div>

      <div className={styles.contact__content}>
        <form className={styles.form} onSubmit={sendEmail}>
          <input
            className={styles.form__input}
            type="text"
            placeholder="Ваше имя"
            name="name"
            required
          />

          <input
            className={styles.form__input}
            type="text"
            placeholder="Ваша фамилия"
            name="surname"
            required
          />

          <input
            className={styles.form__input}
            type="email"
            placeholder="Ваш e-mail"
            name="email"
            required
          />

          <textarea
            className={styles.form__text}
            cols="30"
            rows="10"
            placeholder="Ваше сообщение"
            name="message"
            required
          ></textarea>

          <button className={styles.form__btn} type="submit">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
