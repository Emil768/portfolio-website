import React from "react";
import styles from "./Home.module.scss";
import codeVideo from "../../img/code.mp4";

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.home__content}>
        <div className={styles.home__info}>
          <h1 className={styles.home__title}>Emil Murahas</h1>
          <p className={styles.home__text}>
            Hello, World! I’m a frontend developer.
            <br /> I 💖 JavaScript, ReactJS.
          </p>
        </div>
        <video className={styles.home__img} loop autoPlay muted>
          <source src={codeVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Home;
