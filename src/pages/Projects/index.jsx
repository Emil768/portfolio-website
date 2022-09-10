import React from "react";

import styles from "./Projects.module.scss";
import ProjectBlock from "../../components/ProjectBlock";

import { projects } from "../../projects";

function Projects() {
  return (
    <section className={styles.projects}>
      <h1 className={styles.projects__mainTitle}>My Works</h1>
      <div className={styles.projects__content}>
        {projects.map((item, index) => (
          <ProjectBlock {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
