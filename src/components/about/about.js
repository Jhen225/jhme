import React from "react";
import { HiddenRight, Subtext, CloseButton } from "../../animations";

function About(props) {
  let { open, toggle } = props;

  return (
    <HiddenRight className="hidden-right" pose={open ? "open" : "closed"}>
        <Subtext id="about" className="about-container">
          <CloseButton className="back-button-right close" onClick={toggle}>
            <i className="fa fa-times" />
          </CloseButton>
          <div className="about-text">
            My name is Joshua, but I normally go by Josh. I got into programming
            in high school and ever since then I've been building applications
            and learning to use new technologies. My preferred technologies are
            React, NodeJS, PostgreSQL, ExpressJS, but my knowledge expands
            beyond that. Feel free to contact me for additional information.
          </div>
        </Subtext>
    </HiddenRight>
  );
}

export default About;
