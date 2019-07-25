import React from "react";
import { Router, Link, RouteComponentProps } from "@reach/router";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import "./App.css";

type Props = { component: React.ComponentType } & RouteComponentProps;

const Route: React.FC<Props> = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);

const App: React.FC<RouteComponentProps> = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="schedule">Schedule</Link>
    </nav>
    <Router>
      <Route component={Home} path="/" />
      <Route component={Schedule} path="schedule" />
    </Router>
  </div>
);

export default App;
