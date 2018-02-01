import React, { Component } from 'react';
import './css/Navbar.css';
import './css/App.css';
import './css/Library.css';
import FaCircle from 'react-icons/lib/fa/circle';


export class Library extends Component {
    render() {
        return (
                <div className="content-place">

                    <h1 id="top">Gronda UI Library</h1>

                    <div id="textbutton" className="lib-section">

                        <h2>Text Button</h2>

                        <div className="textbutton-showcase ">
                            <img src="/button1.png" alt="example buttons"/>
                        </div>

                        <p>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. </p>

                        <h4> Regular Grey Button</h4>
                        <img src="/button3.png" alt="grey buttons"/>
                        <h4> Regular Green Button</h4>
                        <img src="/button4.png" alt="green buttons"/>

                        <h4> Button Outline</h4>
                        <img src="/button5.png" alt="outline buttons" width="660px"/>

                        <p className="colors">Available Colors:
                            <FaCircle fill="#FFA300"/> <span className="orange">Orange</span>
                            <FaCircle fill="#00966E"/> <span className="green">Grondagreen</span>
                            <FaCircle fill="#103040"/> <span className="darkblue">Grondablue</span>
                            <FaCircle fill="#E2351E"/> <span className="red">Red</span>
                            <FaCircle fill="#747474"/> <span className="grey">Grey</span>

                        </p>

                        <h4>Special Type Follow Button</h4>
                        <h4>Small Button</h4>

                        <br/>
                        <hr/>
                        <br/>
                        <h4>Visual Specs</h4>
                        <img src="/button6.png" alt="visual specs buttons" />

                        <p>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. </p>

                        <br/>
                        <hr/>
                        <br/>
                        <h4>Interaction Specs</h4>
                        <p>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. </p>

                    </div>

                    <div id="iconbutton" className="lib-section">

                        <h2>Icon Buttons</h2>
                        <input type="button" value="hello"/>
                        <input type="button" value="hola"/>
                        <input type="button" value="whats up"/>

                        <br/>
                        <hr/>
                        <br/>

                        <h4>Visual Specs</h4>
                        <p>To Define </p>
                        <br/>
                        <hr/>
                        <br/>
                        <h4>Interaction Specs</h4>
                        <p>To Define </p>

                    </div>

                    <div id="textinput" className="lib-section">
                        <h2>Text Input</h2>
                        <input type="text"/>
                        <input type="text" placeholder="Type in"/>


                        <br/>
                        <hr/>
                        <br/>

                        <h4>Visual Specs</h4>
                        <p>To Define </p>
                        <br/>
                        <hr/>
                        <br/>
                        <h4>Interaction Specs</h4>
                        <p>To Define </p>


                    </div>

                    <div id="radio" className="lib-section">
                        <h2>Radio</h2>
                        <input type="text"/>
                        <input type="text" placeholder="Type in"/>


                        <br/>
                        <hr/>
                        <br/>

                        <h4>Visual Specs</h4>
                        <p>To Define </p>
                        <br/>
                        <hr/>
                        <br/>
                        <h4>Interaction Specs</h4>
                        <p>To Define </p>


                    </div>


                    <div id="checkbox" className="lib-section">
                        <h2>Checkbox</h2>
                        <input type="text"/>
                        <input type="text" placeholder="Type in"/>


                        <br/>
                        <hr/>
                        <br/>

                        <h4>Visual Specs</h4>
                        <p>To Define </p>
                        <br/>
                        <hr/>
                        <br/>
                        <h4>Interaction Specs</h4>
                        <p>To Define </p>


                    </div>

                    <div id="dropdown" className="lib-section">
                        <h2>Dropdown</h2>
                        <input type="text"/>
                        <input type="text" placeholder="Type in"/>


                        <br/>
                        <hr/>
                        <br/>

                        <h4>Visual Specs</h4>
                        <p>To Define </p>
                        <br/>
                        <hr/>
                        <br/>
                        <h4>Interaction Specs</h4>
                        <p>To Define </p>


                    </div>

                    <div id="combodropdown" className="lib-section">
                        <h2>Combo Dropdown</h2>
                        <input type="text"/>
                        <input type="text" placeholder="Type in"/>


                        <br/>
                        <hr/>
                        <br/>

                        <h4>Visual Specs</h4>
                        <p>To Define </p>
                        <br/>
                        <hr/>
                        <br/>
                        <h4>Interaction Specs</h4>
                        <p>To Define </p>


                    </div>

                    <div id="multiselect" className="lib-section">
                        <h2>Multiselect</h2>
                        <input type="text"/>
                        <input type="text" placeholder="Type in"/>


                        <br/>
                        <hr/>
                        <br/>

                        <h4>Visual Specs</h4>
                        <p>To Define </p>
                        <br/>
                        <hr/>
                        <br/>
                        <h4>Interaction Specs</h4>
                        <p>To Define </p>


                    </div>

                    <div id="multiselectsearch" className="lib-section">
                        <h2>Multiselect Search</h2>
                        <input type="text"/>
                        <input type="text" placeholder="Type in"/>


                        <br/>
                        <hr/>
                        <br/>

                        <h4>Visual Specs</h4>
                        <p>To Define </p>
                        <br/>
                        <hr/>
                        <br/>
                        <h4>Interaction Specs</h4>
                        <p>To Define </p>


                    </div>

                </div>


        );
    }
}

export default Library;
/**
 * Created by martinapirchner on 31.01.18.
 */
