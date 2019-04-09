import React, { Component } from 'react';
import { LandingNavItem } from '../../animations';

const Nav = (props) => {

    let {
        openContact,
        openAbout,
        scrollWork
    } = props;

    return(
        <div className="landing-nav">
          <a id="contact-tag" className="landing-nav-item" onClick={openContact}>Get in Touch <span className="border"><div className="border-color"></div></span></a>
          <a id="work-tag" className="landing-nav-item" onClick={scrollWork}>Work<span className="border"><div className="border-color"></div></span></a>
          <a id="about-tag" className="landing-nav-item" onClick={openAbout}>About<span className="border"><div className="border-color"></div></span></a>
        </div>  
    );
}

export default Nav;