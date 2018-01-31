import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Start from './Start';
import Library from './Library';
import About from './About';
import './css/Main.css';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <div className="content-space">
        <Switch>
            <Route exact path='/gh-page' component={Start}/>
            <Route path='/gh-page/about' component={About}/>
            <Route path='/gh-page/library' component={Library}/>
        </Switch>
    </div>
);

export default Main;
