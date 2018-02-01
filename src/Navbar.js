import React, { Component } from 'react';
import './css/Navbar.css';
import './css/App.css';
import {NavLink} from 'react-router-dom';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaMedium from 'react-icons/lib/fa/medium';
import FaInstagram from 'react-icons/lib/fa/instagram';

export class Navbar extends Component {

  render() {
    return (
      <div className="navbar">

        <div className="title">
            {/* add /gh-page/ to logo path to deploy */}
          <img src="/logo_2.png" className="App-logo" alt="logo" />
        </div>

        <ul className="main">
            <li><NavLink to="/" className="link">Getting Started</NavLink></li>
            <li><NavLink to="/about" className="link">About Signature UI</NavLink></li>
          <li><NavLink to="/library#top" className="link">Signature UI</NavLink>

              <ul className="submenu">
                  <li><a href="/library#textbutton">Text Button</a></li>
                  <li><a href="/library#iconbutton">Icon Button</a></li>
                  <li><a href="/library#textinput">Text Input</a></li>
                  <li><a href="/library#radio">Radio</a></li>
                  <li><a href="/library#checkbox">Checkbox</a></li>
                  <li><a href="/library#dropdown">Dropdown</a></li>
                  <li><a href="/ibrary#combodropdown">Combo Dropdown</a></li>
                  <li><a href="/library#multiselect">Mulitselect</a></li>
                  <li><a href="/library#multiselectsearch">Multiselect Search</a></li>

              </ul>

          </li>
            <li>
                <ul className="submenu2">
                    <li>Follow us on
                        <a href="https://www.facebook.com/GrondaGastro/" target="blank" className="social-icon"><FaFacebookOfficial/></a>
                        <a href="https://medium.com/gronda" target="blank" className="social-icon"><FaMedium/></a>
                        <a href="https://www.instagram.com/gronda.eu" target="blank" className="social-icon"><FaInstagram/></a>
                    </li>

                    <li>&copy; Gronda 2018</li>
                </ul>
            </li>
        </ul>





      </div>
    );
  }
}

export default Navbar;
