import React from 'react';
import '../css/Content.css';
import AboutMe from './content/AboutMe.jsx';
import Activities from './content/Activities.jsx';
import Contact from './content/Contact.jsx';
import Resume from './content/Resume.jsx';
import Experience from './content/Experience.jsx';
import DevLinks from './content/DevLinks.jsx';
import { BrowserRouter, Route, Switch } from "react-router-dom";


export default ({ childProps }) =>
    <BrowserRouter>
        <Switch>
            <Route path='/Projects' component={DevLinks} />
            <Route path='/Experience' component={Experience} />
            <Route path='/Resume' component={Resume} />
            <Route path='/Contact' component={Contact} />
            <Route path='/Activities' component={Activities} />
            <Route path='/' component={AboutMe} />
        </Switch>
    </BrowserRouter>;