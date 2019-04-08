import React, { useState, useRef, useEffect } from 'react';
import posed from 'react-pose'
import _site from '../../config/config.js';
import { Nav } from '../nav/nav';
import Work from '../work/work';
import './App.css';



function App() {

  const workRef = useRef();

  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [subtext, setSubtext] = useState("Think.Learn.Create")
  
  // useEffect(() => {
  //   window.addEventListener('scroll', scrollToWork);
  //   return window.removeEventListener('scroll', scrollToWork)
  // }, []);

  const HiddenRight = posed.div({
    open: { 
      x: 700,
      transition: {
        x: { type: "spring", ease: 'easeOut', duration: 300 },
        default: {ease: 'linear', duration: 500 }
      }
    },
    closed: { 
      x: 0,
      transition: {
        x: { ease: 'easeOut', duration: 300 },
        default: {ease: 'linear', duration: 500 }
      }
    }
  })

  const scrollToWork = (e) => {
    let el = document.getElementById("work")
    console.log(el)
    window.scrollTo({
      top: el.offsetTop,
      behavior: 'smooth'
    })
  }


  const scrollToTop = (e) => {
    let el = document.querySelector('body');
    window.scrollTo({
      top: el.offsetTop,
      behavior: 'smooth'
    })
  }

  const toggleContact = () => {
    setOpenLeft(!openLeft);
    console.log(openLeft)
  }

  const toggleAbout = () => {
    setOpenRight(!openRight);
    console.log(openRight)
  }

  return (
    <div className="wrapper">
      <div className="main-content">
        <section id="landing">
          <div className="landing-content">
            <h3 className="landing-title">Hi. I'm Josh</h3>
            <h2 className="landing-tagline">{subtext}</h2>
          </div>
          <div className="landing-nav">
            <a id="contact-tag" className="landing-nav-item" onClick={()=>setOpenLeft(!openLeft)}>Get in Touch <span className="border"><div className="border-color"></div></span></a>
            <a id="work-tag" className="landing-nav-item" onClick={scrollToWork}>Work<span className="border"><div className="border-color"></div></span></a>
            <a id="about-tag" className="landing-nav-item" onClick={()=>setOpenRight(!openRight)}>About<span className="border"><div className="border-color"></div></span></a>
          </div>
          {/* <Nav scroll={() => scrollToWork()} /> */}
        </section>

        <Work ref={workRef.current} projects={_site.site_info.portfolio.projects} />

        <a className="back-to-top" onClick={() => scrollToTop()}></a>
        <footer id="main-footer">
          <div>© <span>{new Date().getFullYear()}</span> JoshHenryDesigns</div>
        </footer>
      </div>

      <div className="hidden-left">
        <div className="contact-container">
          <button type="button" className="back-button-left close" onClick={toggleContact}><i className="fa fa-times"></i></button>
          <form id="contact-form" action="">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" id="message"></textarea>
          </form>
        </div>
      </div>

      <HiddenRight className="hidden-right" pose={openRight ? 'open' : 'closed'}>
        <section id="about" className="about-container">
          <button type="button" className="back-button-right close" onClick={toggleAbout}><i className="fa fa-times"></i></button>
            <div className="about-text">{_site.site_info.about.blurb}</div>
        </section>
      </HiddenRight>
    </div>
  );

}

export default App;
