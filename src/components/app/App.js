import React, { useState, useRef, useEffect } from 'react';
import _site from '../../config/config.js';
import Nav from '../nav/nav';
import Work from '../work/work';
import { Subtext, HiddenLeft, HiddenRight, InputContainer } from '../../animations';
import './App.css';



function App() {
  const workRef = useRef();

  useEffect(() => {
    scrollToTop(false);
  }, [])


  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [subtext, setSubtext] = useState('Think.Learn.Create');

  const scrollToWork = e => {
    let el = document.getElementById('work');
    switch (e.target.id) {
      case 'work-tag':
        el = document.getElementById('work')
    }
    console.log(el);
    window.scrollTo({
      top: el.offsetTop,
      behavior: 'smooth',
    });
  };

  const scrollToTop = (smooth=true) => {
    let el = document.querySelector('body');
    let config = {
      top: el.offsetTop
    }
    if (smooth) {
      config = {
        top: el.offsetTop,
        behavior: 'smooth'
      }
    }
    console.log(config)
    window.scrollTo(config);
  };

  const toggleContact = () => {
    let delay = 0;
    if ( openRight ) {
      setOpenRight(!openRight)
      delay = 800;
    }
    setTimeout(()=>{
      setOpenLeft(!openLeft);
    },delay)

    console.log(openLeft);
  };

  const toggleAbout = () => {
    let delay = 0;
    if ( openLeft ) {
      setOpenLeft(!openLeft)
      delay = 800;
    } 
    setTimeout(() => {
      setOpenRight(!openRight);
    }, delay)
    console.log(openRight);
  };

  return (
    <div className='wrapper'>
      <div className='main-content'>
        <section id='landing'>
          <div className='landing-content'>
            <h3 className='landing-title'>Hi. I'm Josh</h3>
            <h2 className='landing-tagline'>{subtext}</h2>
          </div>
          <Nav scrollWork={scrollToWork} openContact={toggleContact} openAbout={toggleAbout}/>
        </section>

        <Work projects={_site.site_info.portfolio.projects} />

        <a className='back-to-top' onClick={() => scrollToTop()} />
        <footer id='main-footer'>
          <div>
            © <span>{new Date().getFullYear()}</span> JoshHenryDesigns
          </div>
        </footer>
      </div>

      <HiddenLeft className='hidden-left' pose={openLeft ? 'open' : 'closed'}>
        <div className='contact-container'>
          <button
            type='button'
            className='back-button-left close'
            onClick={toggleContact}>
            <i className='fa fa-times' />
          </button>
          <form id='contact-form' action=''>
            <InputContainer><input type='text' name='name' placeholder='Name' /></InputContainer>
            
            <InputContainer><input type='text' name='email' placeholder='Email' /></InputContainer>
            <InputContainer><input type='text' name='subject' placeholder='Subject' /></InputContainer>
            <InputContainer><textarea name='message' id='message' /></InputContainer>
          </form>
        </div>
      </HiddenLeft>

      <HiddenRight
        className='hidden-right'
        pose={openRight ? 'open' : 'closed'}>
        <Subtext>
          <section id='about' className='about-container'>
            <button
              type='button'
              className='back-button-right close'
              onClick={toggleAbout}>
              <i className='fa fa-times' />
            </button>
            <div className='about-text'>{_site.site_info.about.blurb}</div>
          </section>
        </Subtext>
      </HiddenRight>
    </div>
  );
}

export default App;
