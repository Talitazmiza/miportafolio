import React from 'react';
import './App.css';
import Home from './Views/Sections/Home';
import Project from './Views/Sections/Project';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Views/Sections/About";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/proyectos" exact component={Project} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
