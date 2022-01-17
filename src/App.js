import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UseGeo from "./components/useGeo/components";
import RatingStars from "./components/RatingStars/components";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
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
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/findme">
              <UseGeo />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <RatingStars />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
