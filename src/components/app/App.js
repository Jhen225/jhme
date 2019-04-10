import React, { useState, useEffect } from "react";
import _site from "../../config/config.js";
import Nav from "../nav/nav";
import Work from "../work/work";
import About from "../about/about";
import Contact from "../contact/contact";
import Footer from "../footer/footer";
import Store from "../../state";
import axios from 'axios'
import "./App.css";

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

  useEffect( async () => {
    scrollToTop(false);
    window.addEventListener('scroll', onScroll);
    // axios.put('http://192.168.1.9:4000/projects/1', {test: '123'})
    // .then(res => res.data)
    // .then(data => console.log(data))
    // .catch(err=> console.log(err));
    // try {
    //   let config = {

    //   }
    //   let res = await axios.post('http://localhost:4000/auth/', {test: '123'})
    //   console.log(res);
    // } catch(err) {
    //   console.log(err)
    // }
  }, []);

  const onScroll = (e) => {
    console.log(window.scrollY);
  }

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
        <Work projects={_site.site_info.portfolio.projects} scroll={scrollToTop} />
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
