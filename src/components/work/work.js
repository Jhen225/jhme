import React from "react";
import { WorkItem } from "../../animations";

function Work(props) {
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
    </section>
  );
}

export default Work;
