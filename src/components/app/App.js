import React, { useState, useRef, useEffect } from "react";
import _site from "../../config/config.js";
import Nav from "../nav/nav";
import Work from "../work/work";
import About from "../about/about";
import Contact from "../contact/contact";
import Footer from "../footer/footer";
import Store from "../../state/index";
import posed from 'react-pose';
import "./App.css";


const BackToTop = posed.a({
  hoverable: true,
  init: {
    scale: .8,
    rotate: 0,
    transition: {
      duration: 200
    }
  },
  hover: {
    scale: 1.3,
    rotate: 360,
    transition: {
      duration: 200
    }
  }
})


function App() {
  //State

  const [state, dispatch] = Store.useStore();
  
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [subtext, setSubtext] = useState("Fullstack Developer");


  //Functions

  const scrollToWork = e => {
    let delay = 0;
    if (openLeft || openRight) {
        setOpenLeft(false);
        setOpenRight(false);
        delay = 800;
    }

    let el = document.getElementById("work");
    setTimeout(()=>{
      window.scrollTo({
        top: el.offsetTop,
        behavior: "smooth"
      });
    }, delay)
  };

  const scrollToTop = (smooth = true) => {
    let el = document.querySelector("body");
    let config = {
      top: el.offsetTop
    };
    if (smooth) {
      config = {
        top: el.offsetTop,
        behavior: "smooth"
      };
    }
    window.scrollTo(config);
  };

  const toggleContact = () => {
    let delay = 0;
    if (openRight) {
      setOpenRight(!openRight);
      delay = 800;
    }
    setTimeout(() => {
      setOpenLeft(!openLeft);
    }, delay);
  };

  const toggleAbout = () => {
    let delay = 0;
    if (openLeft) {
      setOpenLeft(!openLeft);
      delay = 800;
    }
    setTimeout(() => {
      setOpenRight(!openRight);
    }, delay);
  };
  

  //Effects

  useEffect(() => {
    scrollToTop(false);
  }, []);


  return (
    <div className="wrapper">
      <div className="main-content">
        <section id="landing">
          <div className="landing-content">
            <h3 className="landing-title">Joshua Henry</h3>
            <h2 className="landing-tagline">{subtext}</h2>
          </div>
          <Nav
            scrollWork={scrollToWork}
            openContact={toggleContact}
            openAbout={toggleAbout}
          />
        </section>

        <Work projects={_site.site_info.portfolio.projects} />

        <BackToTop className="back-to-top" onClick={() => scrollToTop()}><i className="fa fa-chevron-up"></i></BackToTop>
        <Footer />
      </div>

      <Contact toggle={toggleContact} open={openLeft} />
      <About
        toggle={toggleAbout}
        open={openRight}
        blurb={_site.site_info.about.blurb}
      />
    </div>
  );
}

export default App;
