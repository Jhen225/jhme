import React, { useState, useEffect } from "react";
import posed, { PoseGroup } from "react-pose";
import Store from "../../state";
import { BackToTop } from "../../animations";
import FlipMove from 'react-flip-move';
import Filters from "./filters";

const Project = posed.div({
  enter: {
    opacity: 1,
    // transition: {duration: 1000}
  },
  exit: {
    opacity: 0,
    // transition: {duration: 1000}
  }
});

function Projects(props) {
  const [state, dispatch] = Store.useStore();
  const { projects } = state;
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const { scrollToTop } = props;

  let projectContents = filteredProjects.map((project, i) => {
    return (
      <Project className="project" key={i} data-index={i}>
        {project.name}
      </Project>
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
        <FlipMove className="projects"
        staggerDelayBy={50}
        enterAnimation="fade"
        leaveAnimation="fade">
          {
            filteredProjects.map((project, i) => {
              return (
                <Project className="project" key={i} data-index={i}>
                  {project.name}
                </Project>
              );
            })
          }
        </FlipMove>
      </div>
      <BackToTop className="back-to-top" onClick={scrollToTop}>
        <i className="fa fa-chevron-up" />
      </BackToTop>
    </section>
  );
}

export default Projects;
