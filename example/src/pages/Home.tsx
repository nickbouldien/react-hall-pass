import React from "react";
import { Link } from "@reach/router";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>React Hall Pass example</h1>
      <ul>
        <li>
          <Link to="example">example using arrays of permissions</Link>
        </li>

        <li>
          <Link to="example-strings">example using permission strings</Link>
        </li>

        <li>
          <Link to="all-permissions">all permissions</Link>
        </li>

        <li>
          <Link to="helper-components">an example of a "helper component"</Link>
        </li>

        <li>
          <Link to="hook">hook example</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
