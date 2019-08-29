import * as React from "react";
import { Router, Link, RouteComponentProps } from "@reach/router";
import AllPermissions from "./pages/AllPermissions";
import ExampleHelperComponents from "./pages/ExampleHelperComponents";
import ExampleUseHallPassHook from "./pages/ExampleUseHallPassHook";
import Exceptions from "./pages/Exceptions";
import Home from "./pages/Home";
import WarningExamples from "./pages/WarningExamples";
import Schedule from "./pages/Schedule";
import ScheduleStringExample from "./pages/ScheduleStringExample";
import "./App.css";

type Props = { component: React.ComponentType } & RouteComponentProps;

const Route: React.FC<Props> = ({ component: Component, ...rest }) => (
  <Component {...rest} />
);

const App: React.FC<RouteComponentProps> = () => (
  <div className="app">
    <nav className="app-header">
      <Link to="/">Home</Link>
      <Link to="example">example (arrays)</Link>
      <Link to="example-strings">example (strings)</Link>
      <Link to="all-permissions">All Permissions</Link>
      <Link to="exceptions">exceptions</Link>
      <Link to="helper-components">Helper components</Link>
      <Link to="hook">useHallPass (hook)</Link>
    </nav>
    <Router>
      <Route component={Home} path="/" />
      <Route component={Schedule} path="example" />
      <Route component={ScheduleStringExample} path="example-strings" />
      <Route component={AllPermissions} path="all-permissions" />
      <Route component={Exceptions} path="exceptions" />
      <Route component={ExampleHelperComponents} path="helper-components" />
      <Route component={ExampleUseHallPassHook} path="hook" />
      <Route component={WarningExamples} path="warning-examples" />
    </Router>
  </div>
);

export default App;
