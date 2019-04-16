import React, { useState, useEffect } from "react";
import { TOGGLE_OPEN_ABOUT, TOGGLE_OPEN_CONTACT, SET_PAGE_LOADED } from '../../actions/types';
import _site from "../../config/config.js";
import Nav from "../nav/nav";
// import Work from "../work/work";
import Projects from "../projects/projects";
import About from "../about/about";
import Contact from "../contact/contact";
import Footer from "../footer/footer";
import Store from "../../state";
import "./App.css";

import { LandingTitle, LandingSubtitle, BackToTop } from "../../animations";

function App() {
  //State
  const [state, dispatch] = Store.useStore();


  //Functions

  

  

  //Effects

  useEffect(() => {
    dispatch({type: SET_PAGE_LOADED})
  }, []);

  useEffect(() => {
    console.log('Page loaded');
  }, []);

  return (
    <AppContent />
  );
}

const AppContent = () => {

  const [state, dispatch] = Store.useStore();

  

  const {
    loading,
    openAbout,
    openContact
  } = state;

  const [subtext, setSubtext] = useState("Fullstack Developer");

  const scrollToWork = e => {
    let delay = 0;
    if (openContact) {
      dispatch({type: TOGGLE_OPEN_CONTACT});
      delay = 800;

    }

    if (openAbout) {
      dispatch({type: TOGGLE_OPEN_ABOUT});
      delay = 800;
    }

    let el = document.querySelector(".projects");
    setTimeout(() => {
      window.scrollTo({
        top: el.offsetTop,
        behavior: "smooth"
      });
    }, delay);
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
    if (openAbout) {
      dispatch({type: TOGGLE_OPEN_ABOUT});
      delay = 800;
    }
    setTimeout(() => {
      dispatch({type: TOGGLE_OPEN_CONTACT});
    }, delay);
  };

  const toggleAbout = () => {
    let delay = 0;
    if (openContact) {
      dispatch({type: TOGGLE_OPEN_CONTACT});
      delay = 800;
    }
    setTimeout(() => {
      dispatch({type: TOGGLE_OPEN_ABOUT});
    }, delay);
  };

  useEffect(() => {
    scrollToTop(false);
  }, []);

  return (
    <div className="wrapper">
      <div className="main-content">
        <section id="landing">
          <div className="landing-content">
            { loading ? <img style={{display: 'none'}} src="images/hero_images/laptop_css.jpg"/> :  
            <>
            <LandingTitle
              pose={loading ? "exit" : "enter"}
              className="landing-title"
            >
              Joshua Henry
            </LandingTitle>
            <LandingSubtitle
              pose={loading ? "exit" : "enter"}
              className="landing-tagline"
            >
              {subtext}
            </LandingSubtitle>
            </>
            }
          </div>
          <Nav
            scrollWork={scrollToWork}
            openContact={toggleContact}
            openAbout={toggleAbout}
          />
        </section>
        <Projects scrollToTop={scrollToTop} />
        <Footer />
      </div>

      <Contact toggle={toggleContact} open={openContact} />
      <About
        toggle={toggleAbout}
        open={openAbout}
        blurb={_site.site_info.about.blurb}
      />
    </div>
  );
}

export default App;
