import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            </Switch>
        </div>
    );
}

export default App;