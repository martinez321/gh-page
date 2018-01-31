import React, { Component } from 'react';
import './Navbar.css';


export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>Components</li>
            <ul>
              <li>Buttons</li>
            </ul>
          <li>Input Types</li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
