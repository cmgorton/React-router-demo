import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./About";
import Kitten from "./Kitten";
import LearnMore from "./LearnMore";

function AppRouter() {
  return (
    <Router>
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/about/">Kitten</Link>
            </li>
            <li>
              <Link to="/users/">Learn More</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/about/" component={Kitten} />
          <Route path="/users/" component={LearnMore} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
