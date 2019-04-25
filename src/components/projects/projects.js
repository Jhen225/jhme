import React, { useState, useEffect } from "react";
import Store from "../../state";
import { BackToTop } from "../../animations";
import Filters from "./filters";

function Projects(props) {
  const [state, dispatch] = Store.useStore();
  const { projects } = state;
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const { scrollToTop } = props;

  let projectContents = filteredProjects.map((project, i) => {
    return (
      <div className="project" key={i} data-index={i}>
        {project.name}
      </div>
    );
  });

  return (
    <section className="projects-section">
      {/* <div className="project-tiles">{projectTiles}</div> */}
      <div className="projects-container">
        <Filters
          projects={projects}
          setFilteredProjects={setFilteredProjects}
        />
        <div className="projects">{projectContents}</div>
      </div>
      <BackToTop className="back-to-top" onClick={scrollToTop}>
        <i className="fa fa-chevron-up" />
      </BackToTop>
    </section>
  );
}

export default Projects;
