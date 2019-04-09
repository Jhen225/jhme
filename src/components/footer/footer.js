import React from 'react'

function Footer () {
    return (
        <footer id='main-footer'>
          <div>
            © <span>{new Date().getFullYear()}</span> JoshHenryDesigns
          </div>
        </footer>
    );
}

export default Footer;