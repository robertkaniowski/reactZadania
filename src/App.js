import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UseGeo from "./components/useGeo/components";
import RatingStars from "./components/RatingStars/components";
export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">RatingStars</Link>
              </li>
              <li>
                <Link to="/findme">Use Geo</Link>
              </li>
              <li>
                <Link to="/AuthToken">AuthToken</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/findme">
              <UseGeo />
            </Route>
            <Route path="/AuthToken">{/* <AuthToken /> */}</Route>
            <Route path="/">
              <RatingStars />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
