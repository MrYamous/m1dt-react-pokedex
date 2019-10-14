import React from 'react';
import './App.css';
import List from './components/List';
import Pokemon from './components/Pokemon';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

export default function Routing() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={List} />
                <Route path="/:pokemon" component={Pokemon} />
            </Switch>
        </Router>
    );
}