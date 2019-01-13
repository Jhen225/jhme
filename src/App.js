import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./components/navigation/navigation";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <div id="content">
          <section id="about">
            <p className="about-text">Hi. I my name is Joshua Henry, but you probably already knew that. I am a Software Consultant with a specialty in web technologies, but I have a wide range of experience. I've been doing this for roughly 4 years now and I am starting to go more into contract work rather that salaried positions. I have hopes of running my own software consulting firm and this is one of my first steps to making that happen. Enough about my work life, I also love to play video games and explore new places where I can find cool new things to do. Being outside is a pretty calming experience and when I'm not working or playing games, I try my best to find my way outside and get active. If you wanna know anything else feel free to contact me!</p>
          </section>
          <section id="skills">
            <h3>Skills</h3>
            <ul>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Python</li>
              <li>NodeJS</li>
              <li>Java</li>
              <li>C#</li>
              <li>C/C++</li>
              <li>Android Development</li>
              <li>Database Architecture</li>
              <li>Home Automation</li>
            </ul>
          </section>
          <section id="experience">
            <h3>Experience</h3>
          </section>
          <section id="contact">
            <h3>Contact</h3>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
