import React, { useState, useEffect } from "react";
import { LandingNavItem } from "../../animations";

const Nav = props => {
  let { openContact, openAbout, scrollWork } = props;
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <div className="landing-nav">
      <LandingNavItem
        pose={loading ? "exit" : "enter"}
        id="contact-tag"
        className="landing-nav-item"
        onClick={openContact}
      >
        Get in Touch
        {/* <span className="border">
          <div className="border-color" />
        </span> */}
      </LandingNavItem>
      <LandingNavItem
        id="work-tag"
        pose={loading ? "exit" : "enter"}
        className="landing-nav-item"
        onClick={scrollWork}
      >
        Work
        {/* <span className="border">
          <div className="border-color" />
        </span> */}
      </LandingNavItem>
      <LandingNavItem
        id="about-tag"
        pose={loading ? "exit" : "enter"}
        className="landing-nav-item"
        onClick={openAbout}
      >
        About
        {/* <span className="border">
          <div className="border-color" />
        </span> */}
      </LandingNavItem>
    </div>
  );
};

export default Nav;
