import React from 'react';
import './App.css';
import List from './components/List';
import Pokemon from './components/Pokemon';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Routing() {
    return (
        <div>
            <Helmet>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                      crossOrigin="anonymous"/>
                </Helmet>
            <Router>
                <Switch>
                    <Route exact path="/" component={List} />
                    <Route path="/:pokemon" component={Pokemon} />
                </Switch>
            </Router>
        </div>
    );
}