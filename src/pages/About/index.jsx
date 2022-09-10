import React from "react";

import styles from "./About.module.scss";
import userImage from "../../img/user.jpg";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about__content}>
        <img className={styles.about__img} src={userImage} alt="user" />
        <div className={styles.about__info}>
          <h1 className={styles.about__title}>
            About me
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M22 0h-20v24h14l6-6v-18zm-7 23h-12v-22h18v16h-6v6zm1-5h4.586l-4.586 4.586v-4.586zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm0-4h-4v1h4v-1zm-6.006 1h-7.991l-.003-.789c-.003-.72-.006-1.615 1.314-1.92 1.483-.341 1.236-.418 1.158-.563-1.078-1.988-.71-3.173-.395-3.703.388-.651 1.089-1.025 1.923-1.025.827 0 1.523.368 1.91 1.011.545.904.409 2.222-.379 3.713-.105.196-.195.255 1.119.559 1.355.312 1.352 1.212 1.35 1.936l-.006.781zm-6.994-1h6c-.007-.547-.07-.626-.54-.734-.855-.198-1.629-.376-1.901-.972-.142-.311-.113-.66.087-1.039.61-1.151.758-2.146.407-2.729-.276-.458-.778-.526-1.053-.526-.48 0-.857.19-1.063.537-.352.59-.201 1.58.414 2.714.204.377.236.727.095 1.039-.269.598-1.036.774-1.847.962-.525.121-.593.202-.599.748zm13-2v-1h-4v1h4zm0-4h-4v1h4v-1z" />
            </svg>
          </h1>
          <p className={styles.about__text}>
            Hello everyone again! You probably already know that my name is
            Emil, now I would like to tell you a little about myself.At the
            moment I live in the Crimea in the city of Simferopol. I got
            acquainted with programming when I entered college in 2019 and until
            graduation, I actively studied technologies such as <b>HTML</b>,{" "}
            <b>CSS</b>,<b>Javascript</b>. Later I got acquainted with{" "}
            <b>ReactJs</b> and began to feel the backend technically (
            <b>Nodejs</b>,<b> Mongo</b>,<b> Mysql</b>). Today I am actively
            looking for a job to hone my knowledge even more and gain experience
            in application development!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
