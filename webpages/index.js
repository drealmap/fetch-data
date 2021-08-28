import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './home';
import Blog from './blog';

const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Home} />
            <Route path = "/blog/:id" component= {Blog} />
        </Router>
    );
};

export default Webpages;