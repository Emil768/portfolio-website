import React from "react";

import styles from "./About.module.scss";
import userImage from "../../img/user.jpg";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__content}>
        <img className={styles.about__img} src={userImage} alt="user" />
        <div className={styles.about__info}>
          <h1 className={styles.about__title}>About me</h1>
          <p className={styles.about__text}>
            Hello everyone again! You probably already know that my name is
            Emil, now I would like to tell you a little about myself. I got
            acquainted with programming when I entered college in 2019 and until
            graduation, I actively studied technologies such as <b>HTML</b>,{" "}
            <b>CSS</b>,<b>Javascript</b>. Later I got acquainted with React and
            began to feel the backend technically (<b>Nodejs</b>,<b> Mongo</b>,
            <b> Mysql</b>). Today I am actively looking for a job to hone my
            knowledge even more and gain experience in application development!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
