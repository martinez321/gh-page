import React, { Component } from 'react';
import './css/Navbar.css';
import './css/App.css';
import {NavLink} from 'react-router-dom';


export class Navbar extends Component {

  render() {
    return (
      <div className="navbar">

        <div className="title">
          <img src="/gh-page/logo_2.png" className="App-logo" alt="logo" />
        </div>

        <ul className="main">
            <li><NavLink to="/gh-page" className="link">Getting Started</NavLink></li>
            <li><NavLink to="/gh-page/about" className="link">About us</NavLink></li>
          <li><NavLink to="/gh-page/library" className="link">UI Library</NavLink>

              <ul className="submenu">
                  <li><a href="gh-page/gh-page/library#textbutton">Textbuttons</a></li>
                  <li><a href="/gh-page/library#iconbutton">Iconbuttons</a></li>
                  <li><a href="/gh-page/library#textinput">Textinput</a></li>
                  <li><a href="/gh-page/library#headline">Radio</a></li>
                  <li><a href="/gh-page/library#headline">Checkbox</a></li>
                  <li><a href="/gh-page/library#headline">Dropdown</a></li>
                  <li><a href="/gh-page/library#headline">Mulitselect</a></li>
                  <li><a href="/gh-page/library#headline">Multiselect Search</a></li>

              </ul>

          </li>
            <li>
                <ul className="submenu2">
                    <li>Follow Us ... </li>
                    <li>&copy; Gronda 2018</li>
                </ul>
            </li>
        </ul>





      </div>
    );
  }
}

export default Navbar;
