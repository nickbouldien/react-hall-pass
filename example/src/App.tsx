import * as React from "react";
import { Router, Link, RouteComponentProps } from "@reach/router";
import AllPermissions from "./pages/AllPermissions";
import ExampleHelperComponents from "./pages/ExampleHelperComponents";
import ExampleUseHallPassHook from "./pages/ExampleUseHallPassHook";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import "./App.css";

type Props = { component: React.ComponentType } & RouteComponentProps;

const Route: React.FC<Props> = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);

const App: React.FC<RouteComponentProps> = () => (
  <div className="app">
    <nav className="app-header">
      <Link to="/">Home</Link>
      <Link to="schedule">Schedule</Link>
      <Link to="all-permissions">All Permissions</Link>
      <Link to="helper-components">Helper components</Link>
      <Link to="hook">HallPass hook</Link>
    </nav>
    <Router>
      <Route component={Home} path="/" />
      <Route component={Schedule} path="schedule" />
      <Route component={AllPermissions} path="all-permissions" />
      <Route component={ExampleHelperComponents} path="helper-components" />
      <Route component={ExampleUseHallPassHook} path="hook" />
    </Router>
  </div>
);

export default App;
