import React from "react";
import { WorkItem, BackToTop } from "../../animations";

function Work(props) {

  let {
    scroll, 
  } = props;

  const projects = props.projects.map((project, i) => {
    return (
      <WorkItem pose={"open"} key={i} className="work-item">
        <img
          className="work-img"
          alt={project.name}
          src={"/images/projects/" + project.thumbnail}
        />
        <div className="item-overlay">
          <div>
            <p className="project-title">{project.name}</p>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      </WorkItem>
    );
  });

  return (
    <section id="work">
      {props.projects && props.projects.length > 0 ? (
        projects
      ) : (
        <p style={{ color: "white" }}>Loading...</p>
      )}
        <BackToTop className="back-to-top" onClick={scroll}><i className="fa fa-chevron-up"></i></BackToTop>
    </section>
  );
}

export default Work;
