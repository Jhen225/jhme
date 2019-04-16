import React, { useState } from "react";
import Store from "../../state";
import { BackToTop } from '../../animations';

function Projects(props) {
  const [state, dispatch] = Store.useStore();
  const { projects } = state;
  const [current, setCurrent] = useState(projects[0]);
  const [index, setIndex] = useState(0);
    const {
        scrollToTop
    } = props;
  const projectContents = projects.map((project, i) => {
    return (
      <div className="project" data-index={i}>
        <div className="left"></div>
      </div>
    );
  });

  const projectTiles = projects.map((project, i) => {
    return (
      <div className="project-tile" data-index={i} onClick={selectProject}>
        <img src={`/images/projects/${project.thumbnail}`} alt="" className="tile-img"/>
      </div>
    );
  });

  const selectProject = () => {
      console.log(this)
  }

  console.log(projects);
  return (
      <section className="projects">
          <div className="project-tiles">{projectTiles}</div>
          <div className="projects-container">
              <div className="project">
                  <div className="project-thumbnail"></div>
                  <div className="project-info"></div>
              </div>
          </div>
        <BackToTop className="back-to-top" onClick={scrollToTop}><i className="fa fa-chevron-up"></i></BackToTop>
      </section>
  );
}

export default Projects;
