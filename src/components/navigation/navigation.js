import React, { Component } from 'react'
import "./navigation.css"
export default class Navigation extends Component {
    state = {  }
    render() {
        return (
            <div id="main_nav">
                 <nav>
                     <ul className="nav-list">
                         <li className="nav-list-item"><a href="#">About</a></li>
                         <li className="nav-list-item"><a href="#">Skills</a></li>
                         <li className="nav-list-item"><a href="#">Experience</a></li>
                         <li className="nav-list-item"><a href="#">Contact</a></li>
                         <li className="nav-list-item"><a href="#">Blog</a></li>
                     </ul> 
                 </nav>
            </div>
        )
    }
}