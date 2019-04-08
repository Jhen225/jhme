import React, { Component } from 'react';

function Work (props) {

    const projects = props.projects.map((project,i)=>{
           return(
                <a key={i} className="work-item" href="#">
                    <img className="work-img" alt={project.name} src={"/images/projects/"+project.thumbnail}></img>
                    <div className="item-overlay">
                        <div>
                            <p className="project-title">{project.name}</p>
                            <p className="project-description">{project.description}</p>
                        </div>
                    </div>
                </a>
           );
        });
        return(
            <section id="work">
                {projects}
            </section>
        );
    }

export default Work;