import React from "react";
import styles from "./Home.module.scss";
import codeImage from "../../img/giphy-unscreen.gif";

function Home() {
  return (
    <section className={styles.Home}>
      <div className={styles.Home__content}>
        <div className={styles.Home__info}>
          <h1 className={styles.Home__title}>Emil Murahas</h1>
          <p className={styles.Home__text}>
            Hello, World! I’m a frontend developer.
            <br /> I ❤️ JavaScript, ReactJS.
          </p>
        </div>
        <img className={styles.Home__image} src={codeImage} alt="" />
      </div>
    </section>
  );
}

export default Home;
