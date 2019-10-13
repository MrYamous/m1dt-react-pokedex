import React from 'react';
import './App.css';
import List from './components/List'
import Loader from "./components/Loader";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";

export default function Routing() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Loader} />
            </Switch>
        </Router>
    );
}