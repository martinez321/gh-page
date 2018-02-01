import React, { Component } from 'react';
import './css/App.css';
import './css/Start.css';


class Start extends Component {
    render() {
        return (
            <div>
                {/*<img src="/title.png" className="title-img"/> */}
                <div className="content-place">

                    <div className="title-logo">
                        <img src="logo_ui.png"/>
                    </div>

                    <h1 className="welcome-h1">Welcome!</h1>
                    <h4 className="welcome-h4">Here we explain you how to get started with our homegrown UI-Library.</h4>

                    <hr/>

                    <h2>Why use our library</h2>
                    <hr/>

                    <h2>Install Signature UI</h2>

                    <hr/>

                    <h2>Update Signature UI</h2>



                </div>

            </div>
        );
    }
}

export default Start;
