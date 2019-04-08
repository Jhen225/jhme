import React, { Component } from 'react';

export const Nav = (props) => {
    return(
        <div className="landing-nav">
          <a id="contact-tag" className="landing-nav-item">Get in Touch <span className="border"><div className="border-color"></div></span></a>
          <a id="work-tag" className="landing-nav-item" onClick={props.scroll}>Work<span className="border"><div className="border-color"></div></span></a>
          <a id="about-tag" className="landing-nav-item">About<span className="border"><div className="border-color"></div></span></a>
        </div>  
    );
}